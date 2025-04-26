// Este archivo se encarga de cargar el script de desarrollo de Replit solo cuando estamos en modo desarrollo

// Función para cargar el script solo en desarrollo
export function loadReplitDevScript() {
  if (import.meta.env.DEV) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://replit.com/public/js/replit-dev-banner.js';
    document.body.appendChild(script);
  } else {
    // Eliminar cualquier banner de Replit que pueda existir en producción
    const existingScript = document.querySelector('script[src*="replit-dev-banner.js"]');
    if (existingScript) {
      existingScript.remove();
    }
  }
}