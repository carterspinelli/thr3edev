import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { setCursorVariant } = useSetCursorVariant();

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
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-medium tracking-tight">
          <span className="text-white">Diseño</span>
          <span className="text-teal-500">Web</span>
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-10">
            <a 
              href="#inicio" 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Servicios
            </a>
            <a 
              href="#portafolio" 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Portafolio
            </a>
            <a 
              href="#nosotros" 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              Contacto
            </a>
          </div>
        )}
        
        {/* Contact Button - Desktop */}
        {!isMobile && (
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-zinc-700 text-white hover:border-zinc-600 hover:bg-zinc-800"
            asChild
            onMouseEnter={() => setCursorVariant("sm")}
            onMouseLeave={() => setCursorVariant("default")}
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
            className="text-white"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="bg-zinc-900/95 backdrop-blur-md border-b border-zinc-800 absolute w-full">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-5">
            <a 
              href="#inicio" 
              className="font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Servicios
            </a>
            <a 
              href="#portafolio" 
              className="font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Portafolio
            </a>
            <a 
              href="#nosotros" 
              className="font-medium text-zinc-400 hover:text-white transition-colors"
              onClick={closeMobileMenu}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="font-medium text-zinc-400 hover:text-white transition-colors py-2 px-4 bg-zinc-800 rounded-full inline-block w-full text-center"
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
