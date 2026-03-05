// Variable para almacenar configuración actual
let currentSettings = {
  uppercase: false,
  font: 'default',
  fontSize: false,
  highContrast: false,
  hoverMode: false,
  letterSpacing: 'normal'
};

// Crear estilo dinámico para aplicar cambios
let dynamicStyle = document.createElement('style');
dynamicStyle.id = 'accessibility-dynamic-styles';
document.head.appendChild(dynamicStyle);

// Función para aplicar todos los estilos
function applyStyles(settings) {
  currentSettings = settings;
  let css = '';
  
  // Base selector para todo el texto
  const baseSelector = 'body, body *';
  
  // Array para almacenar todas las reglas CSS
  let rules = [];
  
  // Mayúsculas
  if (settings.uppercase) {
    rules.push('text-transform: uppercase !important;');
  } else {
    rules.push('text-transform: none !important;');
  }
  
  // Fuente
  if (settings.font !== 'default') {
    rules.push(`font-family: ${settings.font}, sans-serif !important;`);
  }
  
  // Tamaño de fuente
  if (settings.fontSize) {
    rules.push('font-size: 18pt !important;');
  }
  
  // Alto contraste
  if (settings.highContrast) {
    rules.push('background-color: yellow !important;');
    rules.push('color: black !important;');
  }
  
  // Espaciado de caracteres
  if (settings.letterSpacing !== 'normal') {
    rules.push(`letter-spacing: ${settings.letterSpacing} !important;`);
  }
  
  // Aplicar todas las reglas
  if (rules.length > 0) {
    css += `${baseSelector} {\n  ${rules.join('\n  ')}\n}\n`;
  }
  
  // Modo hover
  if (settings.hoverMode) {
    // Agregar clase a palabras para hover
    addHoverToWords();
    
    // CSS para hover en palabras
    css += `
    .accessibility-word:hover {
      background-color: yellow !important;
      color: black !important;
      cursor: pointer !important;
    }
    `;
  } else {
    // Remover clases de hover
    removeHoverFromWords();
  }
  
  // Aplicar CSS
  dynamicStyle.textContent = css;
}

// Función para envolver palabras con spans para hover
function addHoverToWords() {
  // Evitar procesar múltiples veces
  if (document.body.classList.contains('accessibility-hover-enabled')) {
    return;
  }
  
  document.body.classList.add('accessibility-hover-enabled');
  
  // Obtener todos los nodos de texto
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        // Ignorar scripts, estilos y nodos vacíos
        if (node.parentElement.tagName === 'SCRIPT' || 
            node.parentElement.tagName === 'STYLE' ||
            !node.textContent.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  
  const textNodes = [];
  let node;
  while (node = walker.nextNode()) {
    textNodes.push(node);
  }
  
  // Procesar cada nodo de texto
  textNodes.forEach(textNode => {
    const text = textNode.textContent;
    const words = text.split(/(\s+)/);
    
    if (words.length > 1) {
      const fragment = document.createDocumentFragment();
      
      words.forEach(word => {
        if (word.trim()) {
          const span = document.createElement('span');
          span.className = 'accessibility-word';
          span.textContent = word;
          fragment.appendChild(span);
        } else {
          fragment.appendChild(document.createTextNode(word));
        }
      });
      
      textNode.parentNode.replaceChild(fragment, textNode);
    }
  });
}

// Función para remover spans de hover
function removeHoverFromWords() {
  document.body.classList.remove('accessibility-hover-enabled');
  
  const spans = document.querySelectorAll('.accessibility-word');
  spans.forEach(span => {
    const text = document.createTextNode(span.textContent);
    span.parentNode.replaceChild(text, span);
  });
  
  // Normalizar nodos de texto
  document.body.normalize();
}

// Escuchar mensajes del popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'applySettings') {
    applyStyles(request.settings);
    sendResponse({ success: true });
  }
  return true;
});

// Cargar configuración al cargar la página
window.addEventListener('load', () => {
  const domain = window.location.hostname;
  
  chrome.storage.local.get([domain], (result) => {
    if (result[domain]) {
      applyStyles(result[domain]);
    }
  });
});

// También aplicar inmediatamente si la página ya está cargada
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  const domain = window.location.hostname;
  
  chrome.storage.local.get([domain], (result) => {
    if (result[domain]) {
      applyStyles(result[domain]);
    }
  });
}