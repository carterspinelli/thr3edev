import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">Diseño</span>
          <span className="text-orange-500">Rápido</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-8">
            <a href="#inicio" className="font-medium hover:text-primary transition-colors">Inicio</a>
            <a href="#servicios" className="font-medium hover:text-primary transition-colors">Servicios</a>
            <a href="#portafolio" className="font-medium hover:text-primary transition-colors">Portafolio</a>
            <a href="#nosotros" className="font-medium hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="font-medium hover:text-primary transition-colors">Contacto</a>
          </div>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        )}
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Servicios
            </a>
            <a 
              href="#portafolio" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Portafolio
            </a>
            <a 
              href="#nosotros" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="font-medium hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
