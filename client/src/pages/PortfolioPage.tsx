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
    description:
      language === "es"
        ? "Sitio web oficial para Vessel México"
        : "Official website for Vessel Mexico",
    thumbnail: "/images/vessel-screen.png",
  },
  {
    title: "BetterCaption",
    link: "https://carterspinelli-test-dev.com/",
    description:
      language === "es"
        ? "Sitio web de documentación de muestra para una función ficticia. Sirve como ejemplo de un sitio de documentación técnica que construimos con Docusaurus"
        : "Sample documentation website for a fictional feature. Serves as an example of a technical documentation site we built using Docusaurus",
    thumbnail: "/images/bettercaption.png",
  },
  {
    title: "IBM DS8000",
    link: "https://www.ibm.com/mx-es/products/ds8000",
    description:
      language === "es"
        ? "Sitio web oficial para el IBM DS8000"
        : "Official website for the IBM DS8000 system",
    thumbnail: "/images/ibm-ds8000.png",
  },
  {
    title: "IBM Copy Services Manager",
    link: "https://www.ibm.com/es-es/products/copy-services-manager",
    description:
      language === "es"
        ? "Sitio web oficial para el IBM Copy Services Manager"
        : "Official website for the IBM Copy Services Manager system",
    thumbnail: "/images/ibm-csm.png",
  },
  {
    title: "Carter Spinelli Portfolio",
    link: "https://carterspinelli.com/miscellaneous",
    description:
      language === "es"
        ? "Sitio web personal con diseño minimalista"
        : "Personal website with minimalist design",
    thumbnail: "/images/carter-spinelli.png",
  },
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
    if (path.startsWith("#")) {
      // If it's a home page section, navigate to home with hash
      setLocation(`/${path}`);
    } else if (path === "/portafolio") {
      // Reload the portfolio page
      window.location.reload();
    } else if (path === "#nuestro-proceso") {
      // Navigate to the nuestro-proceso section on the home page
      setLocation("/#nuestro-proceso");
    } else {
      setLocation(path);
    }
  };

  return (
    <div
      className={
        theme === "dark" ? "bg-black text-white" : "bg-white text-zinc-900"
      }
    >
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onNavigate={handleNavigation} />
      </div>

      <PortfolioGrid projects={getProjects(i18n.language)} />

      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
