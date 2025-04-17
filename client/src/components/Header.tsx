import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { motion } from "framer-motion";
import logoImg from "@assets/thr3edev_logo.png";

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

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900' : 'bg-transparent'}`}>
      <motion.nav 
        className="container mx-auto px-6 py-5 flex justify-between items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/" className="flex items-center">
          <img src={logoImg} alt="thr3e.dev" className="h-10" />
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-10">
            {navItems.map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#FF4D2B] w-0 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </motion.a>
            ))}
          </div>
        )}
        
        {/* Contact Button - Desktop */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full border-zinc-800 text-white hover:border-[#FF4D2B] hover:bg-[#FF4D2B]/10"
              asChild
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
            >
              <a href="#contacto">Contactar</a>
            </Button>
          </motion.div>
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
      </motion.nav>
      
      {/* Mobile Navigation Menu */}
      {isMobile && (
        <motion.div 
          className={`bg-black/95 backdrop-blur-md border-b border-zinc-900 absolute w-full overflow-hidden ${!isMobileMenuOpen && 'pointer-events-none'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-5">
            {navItems.map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                className="font-medium text-zinc-400 hover:text-white transition-colors"
                onClick={closeMobileMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isMobileMenuOpen ? 0 : -20, opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a 
              href="#contacto" 
              className="font-medium text-zinc-200 py-2 px-6 bg-[#FF4D2B] hover:bg-[#e03e1f] transition-colors rounded-full inline-block w-full text-center"
              onClick={closeMobileMenu}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isMobileMenuOpen ? 0 : 10, opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            >
              Contactar
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
