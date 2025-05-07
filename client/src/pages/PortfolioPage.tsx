import { useEffect } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";
import { useLocation } from "wouter";
import { BetterCaptionCard } from "@/components/ui/bettercaption-card";
import { useTranslation } from "react-i18next";

// Project translations
const getProjects = (t: any) => [
  {
    title: "IBM DS8000",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: "Sistema de almacenamiento empresarial de alta gama para IBM",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM Copy Services Manager",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: "Plataforma de gestión de servicios de almacenamiento para IBM",
    thumbnail: "/images/ibm-csm.png"
  },
  {
    title: "BetterCaption",
    link: "https://carterspinelli-test-dev.com/",
    description: "Sitio web de documentación de muestra para una función ficticia. Sirve como ejemplo de un sitio de documentación técnica que construimos con Docusaurus",
    thumbnail: "/images/bettercaption.png"
  },
  {
    title: "Carter Spinelli Miscellaneous",
    link: "https://carterspinelli.com/miscellaneous",
    description: "Colección personal de ideas, música y cosas que le gustan al autor",
    thumbnail: "/images/carter-spinelli.png"
  },
  {
    title: "IBM DS8000 Systems",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: "Variante del sistema de almacenamiento empresarial para el sector financiero",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM Storage Solutions",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: "Sitio especializado para servicios de recuperación de datos",
    thumbnail: "/images/ibm-csm.png"
  },
  {
    title: "BetterCaption",
    link: "https://carterspinelli-test-dev.com/",
    description: "Sitio web de documentación de muestra para una función ficticia. Sirve como ejemplo de un sitio de documentación técnica que construimos con Docusaurus",
    thumbnail: "/images/bettercaption.png"
  },
  {
    title: "Carter Spinelli Portfolio",
    link: "https://carterspinelli.com/miscellaneous",
    description: "Proyecto personal con diseño minimalista orientado a contenido",
    thumbnail: "/images/carter-spinelli.png"
  },
  {
    title: "IBM Data Storage",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: "Versión internacional de la plataforma DS8000",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM Copy Services Manager Pro",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: "Versión avanzada con funcionalidades adicionales",
    thumbnail: "/images/ibm-csm.png"
  },
  {
    title: "BetterCaption",
    link: "https://carterspinelli-test-dev.com/",
    description: "Sitio web de documentación de muestra para una función ficticia. Sirve como ejemplo de un sitio de documentación técnica que construimos con Docusaurus",
    thumbnail: "/images/bettercaption.png"
  },
  {
    title: "Carter Spinelli Media",
    link: "https://carterspinelli.com/miscellaneous",
    description: "Sección especializada en multimedia y contenido audiovisual",
    thumbnail: "/images/carter-spinelli.png"
  },
  {
    title: "IBM Storage Hybrid Solutions",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: "Soluciones de almacenamiento híbrido para empresas",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM CSM Express",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: "Versión simplificada para implementación rápida",
    thumbnail: "/images/ibm-csm.png"
  },
  {
    title: "BetterCaption",
    link: "https://carterspinelli-test-dev.com/",
    description: "Sitio web de documentación de muestra para una función ficticia. Sirve como ejemplo de un sitio de documentación técnica que construimos con Docusaurus",
    thumbnail: "/images/bettercaption.png"
  },
  {
    title: "Carter Spinelli Projects",
    link: "https://carterspinelli.com/miscellaneous",
    description: "Galería de proyectos creativos del autor",
    thumbnail: "/images/carter-spinelli.png"
  },
  {
    title: "IBM DS8000 Cloud Integration",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: "Integración con servicios en la nube para empresas",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM Services Management",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: "Plataforma para gestión integral de servicios",
    thumbnail: "/images/ibm-csm.png"
  }
];

export default function PortfolioPage() {
  const { theme } = useTheme();
  const [location, setLocation] = useLocation();
  const { t, i18n } = useTranslation();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle navigation for portfolio page
  const handleNavigation = (path: string) => {
    if (path.startsWith('#')) {
      // If it's a home page section, navigate to home with hash
      setLocation(`/${path}`);
    } else if (path === "/portafolio") {
      // Reload the portfolio page
      window.location.reload();
    } else if (path === "#nuestro-proceso") {
      // Navigate to the nuestro-proceso section on the home page
      setLocation('/#nuestro-proceso');
    }
  };

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-zinc-900'}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onNavigate={handleNavigation} />
      </div>
      
      <div className="relative mt-16">
        <HeroParallax projects={getProjects(t)} />
      </div>
      
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}