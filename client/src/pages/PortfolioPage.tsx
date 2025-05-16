import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { PortfolioGrid } from "@/components/ui/portfolio-grid";

// Project list for the portfolio grid
const getProjects = (language: string) => [
  {
    title: "Vessel México",
    link: "https://vesselmexico.com/",
    description: language === 'es' 
      ? "Sitio web oficial para Vessel México, fabricante de herramientas de precisión desde 1916" 
      : "Official website for Vessel Mexico, manufacturer of precision tools since 1916",
    thumbnail: "/images/vessel-screen.png"
  },
  {
    title: "BetterCaption",
    link: "https://carterspinelli-test-dev.com/",
    description: language === 'es'
      ? "Sitio web de documentación de muestra para una función ficticia. Sirve como ejemplo de un sitio de documentación técnica que construimos con Docusaurus"
      : "Sample documentation website for a fictional feature. Serves as an example of a technical documentation site we built using Docusaurus",
    thumbnail: "/images/bettercaption.png"
  },
  {
    title: "IBM DS8000",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: language === 'es' 
      ? "Sistema de almacenamiento empresarial de alta gama para IBM" 
      : "High-end enterprise storage system for IBM",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM Copy Services Manager",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: language === 'es'
      ? "Plataforma de gestión de servicios de almacenamiento para IBM"
      : "Storage services management platform for IBM",
    thumbnail: "/images/ibm-csm.png"
  },
  {
    title: "Carter Spinelli Portfolio",
    link: "https://carterspinelli.com/miscellaneous",
    description: language === 'es'
      ? "Proyecto personal con diseño minimalista orientado a contenido"
      : "Personal project with a content-oriented minimalist design",
    thumbnail: "/images/carter-spinelli.png"
  },
  {
    title: "IBM DS8000 Systems",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: language === 'es'
      ? "Variante del sistema de almacenamiento empresarial para el sector financiero"
      : "Enterprise storage system variant for the financial sector",
    thumbnail: "/images/ibm-ds8000.png"
  },
  {
    title: "IBM Storage Solutions",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description: language === 'es'
      ? "Sitio especializado para servicios de recuperación de datos"
      : "Specialized site for data recovery services",
    thumbnail: "/images/ibm-csm.png"
  },
  {
    title: "Carter Spinelli Media",
    link: "https://carterspinelli.com/miscellaneous",
    description: language === 'es'
      ? "Sección especializada en multimedia y contenido audiovisual"
      : "Specialized section for multimedia and audiovisual content",
    thumbnail: "/images/carter-spinelli.png"
  },
  {
    title: "IBM Storage Hybrid Solutions",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description: language === 'es'
      ? "Soluciones de almacenamiento híbrido para empresas"
      : "Hybrid storage solutions for businesses",
    thumbnail: "/images/ibm-ds8000.png"
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
    } else {
      setLocation(path);
    }
  };

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-zinc-900'}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onNavigate={handleNavigation} />
      </div>
      
      <PortfolioGrid projects={getProjects(i18n.language)} />
      
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}