# Instrucciones para configurar EmailJS

Para que el formulario de contacto funcione correctamente, necesitas crear una cuenta en EmailJS y configurar un servicio de correo electrónico. Sigue estos pasos:

## Paso 1: Crear una cuenta en EmailJS

1. Ve a [EmailJS.com](https://www.emailjs.com/) y crea una cuenta gratuita (permite hasta 200 correos al mes).
2. Inicia sesión en tu nueva cuenta.

## Paso 2: Añadir un servicio de correo

1. En el panel de EmailJS, ve a "Email Services" (Servicios de correo).
2. Haz clic en "Add New Service" (Añadir nuevo servicio).
3. Selecciona el servicio que prefieras usar (Gmail, Outlook, etc.).
4. Completa los datos de autenticación de tu cuenta de correo.
5. Dale un nombre al servicio (por ejemplo, "thr3e") y guarda.
6. **Anota el Service ID** que se te proporciona (lo necesitarás más adelante).

## Paso 3: Crear una plantilla de correo

1. Ve a "Email Templates" (Plantillas de correo).
2. Haz clic en "Create New Template" (Crear nueva plantilla).
3. Diseña tu plantilla con el siguiente contenido:

**Asunto:**
```
Nuevo contacto de {{from_name}} - Formulario Thr3e.dev
```

**Cuerpo:**
```html
<h2>Nuevo mensaje de contacto</h2>
<p><strong>Empresa:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Referencia:</strong> {{referral_source}}</p>
<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>
```

4. Guarda la plantilla.
5. **Anota el Template ID** que se te proporciona.

## Paso 4: Obtener tu Public Key

1. Ve a "Account" (Cuenta) > "API Keys".
2. **Anota tu Public Key**.

## Paso 5: Actualizar el código

Abre el archivo `client/src/components/ContactModal.tsx` y localiza estas líneas:

```javascript
const emailjsResponse = await emailjs.send(
  'service_id',         // Reemplaza con tu Service ID
  'template_id',        // Reemplaza con tu Template ID
  templateParams,
  'public_key'          // Reemplaza con tu Public Key
);
```

Reemplaza:
- `'service_id'` con el Service ID que anotaste
- `'template_id'` con el Template ID que anotaste
- `'public_key'` con la Public Key que anotaste

## Beneficios de esta solución

- **Simplicidad**: Funciona directamente desde el frontend sin necesidad de configurar servidores SMTP.
- **Confiabilidad**: EmailJS se encarga de garantizar la entrega de correos.
- **Seguimiento**: Tienes acceso a estadísticas de envío en tu panel de EmailJS.
- **Personalización**: Puedes modificar las plantillas de correo fácilmente desde el panel.

## Alternativas a EmailJS

Si EmailJS no es adecuado para tus necesidades, considera estas alternativas:

1. **Formspree** - Servicio simple para formularios de contacto (plan gratuito disponible).
2. **Web3Forms** - Servicio gratuito para sitios estáticos sin servidor.
3. **Resend** - API de correo electrónico para desarrolladores.
4. **Mailjet** - Servicio completo de correo electrónico.

Cada uno tiene su propio proceso de configuración, pero siguen un enfoque similar al de EmailJS.