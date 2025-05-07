import { createRoot } from "react-dom/client";
import { Suspense } from "react";
import App from "./App";
import "./index.css";
import { loadReplitDevScript } from "./utils/replit-dev-script";
import "./i18n"; // Importar configuración de i18n

// Renderizar la aplicación con Suspense para i18n
createRoot(document.getElementById("root")!).render(
  <Suspense fallback="Loading...">
    <App />
  </Suspense>
);

// Cargar el script de Replit solo en entorno de desarrollo
// Esta función comprobará si estamos en desarrollo y añadirá el script
// o lo eliminará si estamos en producción
loadReplitDevScript();
