PORTFOLIO DE NICOLÁS SAMUDIO — SITIO WEB ESTÁTICO
================================================

CONTENIDO
- index.html                  Página principal.
- styles.css                  Todos los estilos, responsive para celular/tablet/PC.
- script.js                   Menú móvil, año automático y botones de contacto.
- config.js                   Configuración de email, LinkedIn y WhatsApp.
- assets/nicolas-hero-hd.webp Foto HD utilizada en el encabezado (encuadre superior).
- assets/nicolas-hero.webp    Foto original de respaldo del encabezado.
- assets/gmail.svg            Icono oficial de Gmail.
- assets/whatsapp.svg         Icono oficial de WhatsApp.
- assets/*.svg                Iconos de tecnologías y favicon (archivos locales).
- assets/diseno-referencia.webp Imagen de referencia del diseño completo.
- docs/Nicolas_Samudio_CV.pdf Curriculum resumido generado a partir del texto disponible.

PUBLICAR EN HOSTING / SERVIDOR
1. Descomprimir el ZIP.
2. Subir TODO el contenido de la carpeta portfolio_nicolas a la carpeta pública
   del servidor: public_html, www, htdocs o la que indique el proveedor.
3. Verificar que index.html quede en la raíz pública.
4. Abrir el dominio. No hace falta Node.js, PHP, instalación ni base de datos.

CONFIGURAR CONTACTO (IMPORTANTE)
Abrir config.js y completar los tres valores:
  email: 'correo@ejemplo.com',
  linkedin: 'https://www.linkedin.com/in/usuario/',
  whatsapp: '5491123456789'
Si quedan vacíos, los botones muestran un mensaje y no dirigen a datos falsos.

ACTUALIZAR EL CV
Reemplazar docs/Nicolas_Samudio_CV.pdf por el CV definitivo cuando esté listo.
El PDF incluido contiene un resumen de la experiencia visible en el sitio;
no incluye teléfono, correo, enlaces ni información personal no suministrada.

NOTAS
- Las fuentes Poppins se cargan de Google Fonts; si no hay conexión, se usa Arial.
- Las imágenes y los íconos se alojan localmente en assets.
- Diseño preparado para distintos tamaños de pantalla.
- No publicar información de contacto ficticia.
