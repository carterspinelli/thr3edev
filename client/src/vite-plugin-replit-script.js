// Plugin para manejar la inclusión condicionada del script de Replit
export default function replitDevScriptPlugin() {
  return {
    name: 'replit-dev-script',
    transformIndexHtml(html) {
      // Reemplazar el marcador de posición según el entorno
      if (process.env.NODE_ENV === 'development') {
        return html.replace(
          '<!-- REPLIT_DEV_SCRIPT_PLACEHOLDER -->',
          '<script type="text/javascript" src="https://replit.com/public/js/replit-dev-banner.js"></script>'
        );
      } else {
        return html.replace('<!-- REPLIT_DEV_SCRIPT_PLACEHOLDER -->', '');
      }
    }
  };
}