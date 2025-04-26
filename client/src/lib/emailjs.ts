import emailjs from '@emailjs/browser';

// Configuración de EmailJS hardcodeada para garantizar que siempre esté disponible
// Valores reales extraídos de la configuración que guardaste
const EMAIL_JS_CONFIG = {
  SERVICE_ID: 'service_jnj7xop', // Este valor debe coincidir con tu Service ID de EmailJS
  TEMPLATE_ID: 'template_09vnl98', // Este valor debe coincidir con tu Template ID de EmailJS
  PUBLIC_KEY: 'fB74XwUbN5TlQCWLv' // Este valor debe coincidir con tu Public Key de EmailJS
};

// Inicializa EmailJS inmediatamente
if (EMAIL_JS_CONFIG.PUBLIC_KEY) {
  emailjs.init(EMAIL_JS_CONFIG.PUBLIC_KEY);
  console.log('EmailJS inicializado con éxito');
}

// Función simplificada para enviar correos - usa la configuración hardcodeada
export async function sendContactForm(
  serviceId: string = EMAIL_JS_CONFIG.SERVICE_ID,
  templateId: string = EMAIL_JS_CONFIG.TEMPLATE_ID,
  templateParams: {
    from_name: string;
    from_email: string;
    message: string;
    referral_source: string;
    to_email: string;
  }
) {
  try {
    console.log('Enviando correo con EmailJS', {
      serviceId, 
      templateId,
      publicKey: EMAIL_JS_CONFIG.PUBLIC_KEY ? 'Configurado' : 'No configurado'
    });
    
    // Verificamos que los valores de configuración existan
    if (!serviceId || !templateId || !EMAIL_JS_CONFIG.PUBLIC_KEY) {
      throw new Error('Configuración de EmailJS incompleta');
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );
    
    console.log('Respuesta de EmailJS:', response);
    return { success: true, status: response.status, text: response.text };
  } catch (error) {
    console.error('Error enviando el correo con EmailJS:', error);
    return { success: false, error };
  }
}

// Mantener esta función para compatibilidad
export function initializeEmailJS(publicKey: string) {
  emailjs.init(publicKey);
}