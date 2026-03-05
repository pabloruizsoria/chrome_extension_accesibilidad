# chrome_extension_accesibilidad
Plugin para chrome con diferentes opciones de accesibilidad. Favorecer lectura con dislexia y otros problemas de lectura

# 🔍 Extensión de Accesibilidad Web para Chrome

## Descripción

Extensión de Google Chrome diseñada para mejorar la accesibilidad de sitios web mediante controles personalizables que permiten ajustar la visualización del contenido según las necesidades del usuario.

## Características

### ✨ Funcionalidades Principales

1. **Texto en Mayúsculas**: Convierte todo el texto de la página a mayúsculas o lo restaura a su formato original
2. **Selector de Fuentes**: Cambia la tipografía entre:
   - Por Defecto (fuente original del sitio)
   - Verdana
   - Helvetica
   - Comic Sans MS
3. **Tamaño de Fuente**: Establece el tamaño de todo el texto a 18 puntos
4. **Alto Contraste**: Aplica fondo amarillo y texto negro para mejor legibilidad
5. **Modo Hover en Palabras**: Al activar, cada palabra cambia a fondo amarillo y texto negro al pasar el ratón
6. **Espaciado entre Caracteres**: Ajusta el espaciado con las opciones:
   - Normal
   - +7%
   - +14%

### 💾 Persistencia

- La configuración se guarda **por dominio** usando `chrome.storage.local`
- Al volver a visitar un sitio, la configuración se aplica automáticamente
- Cada dominio mantiene su configuración independiente

## Instalación

### Opción 1: Modo Desarrollador (Extensión No Empaquetada)

1. Abre Google Chrome
2. Navega a `chrome://extensions/`
3. Activa el **Modo de desarrollador** (esquina superior derecha)
4. Haz clic en **Cargar extensión sin empaquetar**
5. Selecciona la carpeta `chrome_extension_accesibilidad`
6. La extensión aparecerá en tu barra de herramientas

### Opción 2: Empaquetar la Extensión

1. Ve a `chrome://extensions/`
2. Activa el **Modo de desarrollador**
3. Haz clic en **Empaquetar extensión**
4. Selecciona la carpeta `chrome_extension_accesibilidad`
5. Se generará un archivo `.crx` que puedes instalar

## Uso

1. **Abrir la extensión**: Haz clic en el icono de la extensión en la barra de herramientas
2. **Aplicar cambios**: Usa los controles del popup para ajustar la accesibilidad
3. **Guardar automáticamente**: Todos los cambios se guardan automáticamente por dominio
4. **Restablecer**: Usa el botón "Restablecer Todo" para volver a la configuración original

## Estructura de Archivos

```
chrome_extension_accesibilidad/
├── manifest.json          # Configuración de la extensión (Manifest V3)
├── popup.html            # Interfaz de usuario del popup
├── popup.js              # Lógica del popup y gestión de storage
├── content.js            # Script que modifica las páginas web
├── styles.css            # Estilos base inyectados
└── README.md             # Este archivo
```

## Notas Técnicas

- **Manifest Version**: 3 (última versión de Chrome)
- **Permisos**:
  - `activeTab`: Para acceder a la pestaña actual
  - `storage`: Para guardar configuración
  - `scripting`: Para inyectar scripts
- **Compatibilidad**: Chrome 88+

## Solución de Problemas

### La extensión no aplica cambios
- Recarga la página web después de instalar la extensión
- Verifica que la extensión esté habilitada en `chrome://extensions/`

### Los cambios no persisten
- Asegúrate de que Chrome tenga permisos de almacenamiento
- Verifica en la consola de desarrollador si hay errores

### El modo hover no funciona
- Este modo requiere procesar todo el texto de la página
- En páginas muy grandes puede tardar unos segundos
- Recarga la página si no funciona correctamente

## Agregar Iconos (Opcional)

Para completar la extensión con iconos personalizados:

1. Crea tres imágenes PNG:
   - `icon16.png` (16x16 píxeles)
   - `icon48.png` (48x48 píxeles)
   - `icon128.png` (128x128 píxeles)
2. Colócalas en la carpeta raíz de la extensión
3. Los iconos aparecerán en la barra de herramientas y en la página de extensiones

## Próximas Mejoras

- [ ] Añadir más opciones de fuentes
- [ ] Incluir ajustes de contraste personalizados
- [ ] Exportar/importar configuraciones
- [ ] Modo oscuro/claro
- [ ] Atajos de teclado

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Nota**: Para usar esta extensión en producción con usuarios reales, necesitarás crear iconos y potencialmente publicarla en la Chrome Web Store.