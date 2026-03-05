// Obtener la URL del dominio actual
function getCurrentDomain(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      const url = new URL(tabs[0].url);
      const domain = url.hostname;
      callback(domain, tabs[0].id);
    }
  });
}

// Cargar configuración guardada para el dominio actual
function loadSettings(domain) {
  chrome.storage.local.get([domain], (result) => {
    const settings = result[domain] || {
      uppercase: false,
      font: 'default',
      fontSize: false,
      highContrast: false,
      hoverMode: false,
      letterSpacing: 'normal'
    };
    
    // Aplicar configuración a la interfaz
    updateUI(settings);
  });
}

// Actualizar interfaz con la configuración cargada
function updateUI(settings) {
  // Toggle Mayúsculas
  const uppercaseBtn = document.getElementById('toggleUppercase');
  const uppercaseStatus = document.getElementById('uppercaseStatus');
  if (settings.uppercase) {
    uppercaseBtn.classList.add('active');
    uppercaseBtn.textContent = 'Desactivar Mayúsculas';
    uppercaseStatus.textContent = 'Estado: Activado';
  } else {
    uppercaseBtn.classList.remove('active');
    uppercaseBtn.textContent = 'Activar Mayúsculas';
    uppercaseStatus.textContent = 'Estado: Desactivado';
  }
  
  // Fuente
  document.getElementById('fontSelect').value = settings.font;
  
  // Espaciado
  document.getElementById('letterSpacingSelect').value = settings.letterSpacing;
  
  // Toggle Hover
  const hoverBtn = document.getElementById('toggleHover');
  const hoverStatus = document.getElementById('hoverStatus');
  if (settings.hoverMode) {
    hoverBtn.classList.add('active');
    hoverBtn.textContent = 'Desactivar Modo Hover';
    hoverStatus.textContent = 'Estado: Activado';
  } else {
    hoverBtn.classList.remove('active');
    hoverBtn.textContent = 'Activar Modo Hover';
    hoverStatus.textContent = 'Estado: Desactivado';
  }
}

// Guardar configuración y aplicar cambios
function saveAndApply(domain, tabId, settings) {
  // Guardar en storage
  chrome.storage.local.set({ [domain]: settings }, () => {
    // Enviar mensaje al content script para aplicar cambios
    chrome.tabs.sendMessage(tabId, {
      action: 'applySettings',
      settings: settings
    });
  });
}

// Inicializar cuando se carga el popup
document.addEventListener('DOMContentLoaded', () => {
  getCurrentDomain((domain, tabId) => {
    // Cargar configuración existente
    loadSettings(domain);
    
    // Obtener configuración actual
    chrome.storage.local.get([domain], (result) => {
      let settings = result[domain] || {
        uppercase: false,
        font: 'default',
        fontSize: false,
        highContrast: false,
        hoverMode: false,
        letterSpacing: 'normal'
      };
      
      // Toggle Mayúsculas
      document.getElementById('toggleUppercase').addEventListener('click', () => {
        settings.uppercase = !settings.uppercase;
        updateUI(settings);
        saveAndApply(domain, tabId, settings);
      });
      
      // Selector de Fuente
      document.getElementById('fontSelect').addEventListener('change', (e) => {
        settings.font = e.target.value;
        saveAndApply(domain, tabId, settings);
      });
      
      // Tamaño de Fuente 18pt
      document.getElementById('fontSize18').addEventListener('click', () => {
        settings.fontSize = true;
        saveAndApply(domain, tabId, settings);
      });
      
      // Alto Contraste
      document.getElementById('highContrast').addEventListener('click', () => {
        settings.highContrast = true;
        saveAndApply(domain, tabId, settings);
      });
      
      // Toggle Hover
      document.getElementById('toggleHover').addEventListener('click', () => {
        settings.hoverMode = !settings.hoverMode;
        updateUI(settings);
        saveAndApply(domain, tabId, settings);
      });
      
      // Espaciado de Caracteres
      document.getElementById('letterSpacingSelect').addEventListener('change', (e) => {
        settings.letterSpacing = e.target.value;
        saveAndApply(domain, tabId, settings);
      });
      
      // Restablecer Todo
      document.getElementById('resetAll').addEventListener('click', () => {
        settings = {
          uppercase: false,
          font: 'default',
          fontSize: false,
          highContrast: false,
          hoverMode: false,
          letterSpacing: 'normal'
        };
        updateUI(settings);
        saveAndApply(domain, tabId, settings);
      });
    });
  });
});