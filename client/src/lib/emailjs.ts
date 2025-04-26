import emailjs from '@emailjs/browser';

// Esta función debe llamarse al inicio de la aplicación para configurar EmailJS
export function initializeEmailJS(publicKey: string) {
  emailjs.init(publicKey);
}

// Simplifica el envío de correos
export async function sendContactForm(
  serviceId: string,
  templateId: string,
  templateParams: {
    from_name: string;
    from_email: string;
    message: string;
    referral_source: string;
    to_email: string;
  }
) {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );
    return { success: true, status: response.status, text: response.text };
  } catch (error) {
    console.error('Error enviando el correo con EmailJS:', error);
    return { success: false, error };
  }
}