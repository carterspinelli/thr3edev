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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-neutral-100' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          <span className="text-neutral-900">Diseño</span>
          <span className="text-primary">Web</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-10">
            <a href="#inicio" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Servicios</a>
            <a href="#portafolio" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Portafolio</a>
            <a href="#nosotros" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Nosotros</a>
            <a href="#contacto" className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors">Contacto</a>
          </div>
        )}
        
        {/* Contact Button - Desktop */}
        {!isMobile && (
          <Button 
            variant="outline" 
            size="sm" 
            className="border-neutral-200 text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50"
            asChild
          >
            <a href="#contacto">Contactar</a>
          </Button>
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className="text-neutral-700"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-sm border-b border-neutral-100 absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-5">
            <a 
              href="#inicio" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Servicios
            </a>
            <a 
              href="#portafolio" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Portafolio
            </a>
            <a 
              href="#nosotros" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
              onClick={closeMobileMenu}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="font-medium text-neutral-700 hover:text-neutral-900 transition-colors py-2 px-4 bg-neutral-50 rounded-md inline-block w-full text-center"
              onClick={closeMobileMenu}
            >
              Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
