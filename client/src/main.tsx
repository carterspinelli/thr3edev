import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { loadReplitDevScript } from "./utils/replit-dev-script";

// Renderizar la aplicación
createRoot(document.getElementById("root")!).render(<App />);

// Cargar el script de Replit solo en entorno de desarrollo
// Esta función comprobará si estamos en desarrollo y añadirá el script
// o lo eliminará si estamos en producción
loadReplitDevScript();
