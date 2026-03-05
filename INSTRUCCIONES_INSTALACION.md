# 📦 Instrucciones de Instalación - Extensión de Accesibilidad Web

## Requisitos Previos
- Google Chrome (versión 88 o superior)
- Acceso a la carpeta de la extensión

---

## 🚀 Instalación Paso a Paso

### Método 1: Cargar Extensión sin Empaquetar (Recomendado para Desarrollo)

#### Paso 1: Abrir la Página de Extensiones
1. Abre Google Chrome
2. En la barra de direcciones, escribe: `chrome://extensions/`
3. Presiona **Enter**

#### Paso 2: Activar el Modo de Desarrollador
1. En la esquina superior derecha, busca el interruptor **"Modo de desarrollador"**
2. **Actívalo** (debe ponerse en color azul)

#### Paso 3: Cargar la Extensión
1. Haz clic en el botón **"Cargar extensión sin empaquetar"**
2. Navega hasta la carpeta: `/home/ubuntu/chrome_extension_accesibilidad`
3. Selecciona la carpeta y haz clic en **"Seleccionar carpeta"**

#### Paso 4: Verificar la Instalación
- La extensión aparecerá en la lista con el nombre **"Accesibilidad Web"**
- Verás un icono verde con la letra "A" en la barra de herramientas
- Si no ves el icono, haz clic en el ícono de puzzle (🧩) y fija la extensión

---

### Método 2: Usar la Página de Demostración

#### Paso 1: Abrir la Página de Prueba
1. Abre Chrome
2. Arrastra el archivo `demo.html` a una ventana de Chrome
   - O usa: `Ctrl+O` (Cmd+O en Mac) para abrir archivos
   - Navega a: `/home/ubuntu/chrome_extension_accesibilidad/demo.html`

#### Paso 2: Probar la Extensión
1. Haz clic en el icono de la extensión en la barra de herramientas
2. Se abrirá un popup con todos los controles
3. Prueba cada funcionalidad:
   - ✅ Toggle de mayúsculas
   - ✅ Selector de fuentes
   - ✅ Botón de tamaño 18pt
   - ✅ Botón de alto contraste
   - ✅ Toggle de modo hover
   - ✅ Selector de espaciado

---

## 🧪 Probar la Extensión

### Página de Demostración Incluida
- Abre `demo.html` en Chrome
- Esta página tiene contenido de prueba diseñado específicamente para la extensión

### Probar en Sitios Reales
1. Visita cualquier sitio web (ejemplo: `https://www.wikipedia.org`)
2. Haz clic en el icono de la extensión
3. Aplica diferentes configuraciones
4. **Importante**: Los cambios se guardan por dominio
5. Recarga la página para ver que la configuración persiste

---

## 🎯 Uso de las Funcionalidades

### 1️⃣ Texto en Mayúsculas
- **Función**: Convierte TODO el texto de la página a mayúsculas
- **Uso**: Haz clic en "Activar Mayúsculas"
- **Toggle**: Haz clic de nuevo para desactivar

### 2️⃣ Selector de Fuentes
- **Opciones**: Por Defecto, Verdana, Helvetica, Comic Sans
- **Uso**: Selecciona una opción del menú desplegable
- **Aplicación**: Se aplica instantáneamente

### 3️⃣ Tamaño de Fuente 18pt
- **Función**: Establece todo el texto a 18 puntos
- **Uso**: Haz clic en "Establecer 18 Puntos"
- **Nota**: Se aplica sobre el tamaño original

### 4️⃣ Alto Contraste
- **Función**: Fondo amarillo + texto negro
- **Uso**: Haz clic en "Fondo Amarillo y Texto Negro"
- **Ideal para**: Usuarios con problemas de visión

### 5️⃣ Modo Hover en Palabras
- **Función**: Cada palabra se resalta al pasar el ratón
- **Uso**: Haz clic en "Activar Modo Hover"
- **Efecto**: Fondo amarillo + texto negro en hover
- **Toggle**: Haz clic de nuevo para desactivar

### 6️⃣ Espaciado entre Caracteres
- **Opciones**: Normal, +7%, +14%
- **Uso**: Selecciona una opción del menú desplegable
- **Beneficio**: Mejora la legibilidad para dislexia

---

## 💾 Persistencia de Configuración

### Cómo Funciona
- Cada dominio tiene su **configuración independiente**
- Los ajustes se guardan automáticamente en `chrome.storage.local`
- Al volver a visitar un sitio, la configuración se **aplica automáticamente**

### Ejemplo
```
wikipedia.org → Mayúsculas: SÍ, Fuente: Verdana
github.com    → Mayúsculas: NO, Fuente: Helvetica
```

### Restablecer Configuración
- Haz clic en el botón rojo **"Restablecer Todo"**
- Esto borra la configuración **solo del dominio actual**

---

## 🔧 Solución de Problemas

### ❌ La extensión no aparece
**Solución**:
1. Verifica que el modo de desarrollador esté activado
2. Recarga la extensión en `chrome://extensions/`
3. Busca errores en la consola (clic en "errores" en la tarjeta de la extensión)

### ❌ Los cambios no se aplican
**Solución**:
1. Recarga la página web (F5 o Ctrl+R)
2. Verifica que la extensión esté habilitada
3. Abre la consola del navegador (F12) y busca errores

### ❌ El modo hover no funciona
**Solución**:
1. El modo hover requiere procesar el DOM completo
2. En páginas muy grandes puede tardar unos segundos
3. Recarga la página después de activar el modo hover
4. Desactiva y vuelve a activar el modo

### ❌ La configuración no persiste
**Solución**:
1. Verifica que Chrome tenga permisos de almacenamiento
2. Ve a `chrome://settings/content/cookies` y permite el almacenamiento local
3. Comprueba que no estés en modo incógnito

### ❌ Conflictos con otros estilos
**Solución**:
- Algunos sitios usan `!important` en sus CSS
- Nuestra extensión también usa `!important` para prioridad
- En casos extremos, algunos estilos pueden no aplicarse completamente

---

## 📊 Verificación de Funcionalidad

### Checklist de Pruebas
- [ ] Instalar extensión correctamente
- [ ] Ver icono en barra de herramientas
- [ ] Abrir popup y ver todos los controles
- [ ] Probar toggle de mayúsculas (ON/OFF)
- [ ] Cambiar entre diferentes fuentes
- [ ] Aplicar tamaño 18pt
- [ ] Aplicar alto contraste
- [ ] Activar/desactivar modo hover
- [ ] Cambiar espaciado de caracteres
- [ ] Verificar persistencia: aplicar configuración, cerrar Chrome, volver a abrir
- [ ] Probar en múltiples dominios diferentes
- [ ] Usar botón "Restablecer Todo"

---

## 🎨 Personalización Avanzada

### Modificar Colores del Alto Contraste
Edita `content.js`, líneas con `highContrast`:
```javascript
rules.push('background-color: yellow !important;');
rules.push('color: black !important;');
```

### Agregar Más Fuentes
Edita `popup.html` en el selector de fuentes:
```html
<option value="Georgia">Georgia</option>
<option value="Times New Roman">Times New Roman</option>
```

### Cambiar Tamaños de Fuente
Edita `content.js`, busca `fontSize`:
```javascript
rules.push('font-size: 20pt !important;'); // Cambia de 18pt a 20pt
```

---

## 📝 Notas Importantes

1. **Compatibilidad**: Chrome 88+, Edge 88+, Brave, Opera
2. **Rendimiento**: El modo hover puede ser lento en páginas muy grandes
3. **Privacidad**: Toda la configuración se guarda localmente, no se envía a servidores
4. **Dominios**: `example.com` y `www.example.com` se tratan como dominios diferentes
5. **HTTPS**: La extensión funciona en sitios HTTP y HTTPS

---

## 🆘 Soporte

### Logs y Debug
Para ver logs de depuración:
1. Abre la consola de Chrome (F12)
2. Ve a la pestaña "Console"
3. Filtra por "Accesibilidad" o errores relacionados

### Recargar la Extensión
Si haces cambios al código:
1. Ve a `chrome://extensions/`
2. Busca "Accesibilidad Web"
3. Haz clic en el icono de recargar (🔄)

---

## 📚 Recursos Adicionales

- [Documentación de Chrome Extensions](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Storage API](https://developer.chrome.com/docs/extensions/reference/storage/)

---

**¡Listo! Tu extensión de accesibilidad está lista para usar. 🎉**
