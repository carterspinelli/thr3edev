import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, es } from './locales';

// Lista de idiomas soportados
export const languages = ['en', 'es'];

// Función para detectar el país del usuario
export async function detectUserCountry(): Promise<string> {
  try {
    // Intentamos obtener la ubicación del usuario mediante una API de geolocalización
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    // Si el usuario está en México, mostramos español
    if (data.country === 'MX') {
      return 'es';
    }
    
    // Si el usuario está en EEUU, mostramos inglés
    if (data.country === 'US') {
      return 'en';
    }
    
    // Para otros países, usamos el detector de idioma del navegador
    return '';
  } catch (error) {
    console.error('Error detecting user country:', error);
    return '';
  }
}

// Recursos de traducción
const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
};

i18n
  // Detecta el idioma del usuario
  .use(LanguageDetector)
  // Pasa el i18n a react-i18next
  .use(initReactI18next)
  // Inicializa i18next
  .init({
    resources,
    debug: import.meta.env.DEV,
    fallbackLng: 'es',
    supportedLngs: languages,
    interpolation: {
      escapeValue: false, // no es necesario para React
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
    react: {
      useSuspense: true,
    },
  });

// Configuración para aplicar el idioma según la ubicación del usuario
detectUserCountry().then((detectedLanguage) => {
  if (detectedLanguage && languages.includes(detectedLanguage)) {
    i18n.changeLanguage(detectedLanguage);
  }
});

export default i18n;