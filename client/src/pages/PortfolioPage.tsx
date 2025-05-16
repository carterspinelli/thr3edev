import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/use-theme";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { PortfolioShowcase } from "@/components/ui/portfolio-showcase";

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
    <div className={theme === 'dark' ? 'bg-black text-white min-h-screen' : 'bg-white text-zinc-900 min-h-screen'}>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header onNavigate={handleNavigation} />
      </div>
      
      <div className="pt-16">
        <PortfolioShowcase />
      </div>
      
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}