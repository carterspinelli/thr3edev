import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initializeEmailJS } from "./lib/emailjs";

// Inicializa EmailJS con tu clave pública
// Reemplaza 'your_public_key' con tu clave pública de EmailJS
initializeEmailJS('your_public_key');

createRoot(document.getElementById("root")!).render(<App />);
