import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { setCursorVariant } = useSetCursorVariant();
  const { theme } = useTheme();

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
    { href: "#servicios", label: "Servicios" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "#nosotros", label: "Nosotros" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (theme === 'dark' ? 'bg-black/90 backdrop-blur-md border-b border-zinc-900' : 'bg-white/90 backdrop-blur-md border-b border-zinc-200') : 'bg-transparent'}`}>
      <motion.nav 
        className="container mx-auto px-6 py-6 md:py-8 flex justify-between items-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link href="/" className="flex items-center">
          <Logo textSize="lg" />
        </Link>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="flex space-x-10">
            {navItems.map((item, index) => (
              <motion.a 
                key={index}
                href={item.href} 
                className={`text-sm font-medium transition-colors relative group ${theme === 'dark' ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#0e62fe] w-0 group-hover:w-full transition-all duration-300"
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
              variant="expandIcon"
              size="sm"
              className="bg-[#0e62fe] text-white"
              Icon={() => <ArrowRight className="h-4 w-4" />}
              iconPlacement="right"
              onMouseEnter={() => setCursorVariant("sm")}
              onMouseLeave={() => setCursorVariant("default")}
              onClick={() => window.location.href = "mailto:contacto@thr3e.dev"}
            >
              Contactar
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
            className={theme === 'dark' ? 'text-white' : 'text-zinc-900'}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        )}
      </motion.nav>
      
      {/* Mobile Navigation Menu */}
      {isMobile && (
        <motion.div 
          className={`${theme === 'dark' 
              ? 'bg-black/95 backdrop-blur-md border-b border-zinc-900' 
              : 'bg-white/95 backdrop-blur-md border-b border-zinc-200'} 
            absolute w-full overflow-hidden ${!isMobileMenuOpen && 'pointer-events-none'}`}
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
                className={`font-medium transition-colors ${theme === 'dark' 
                  ? 'text-zinc-400 hover:text-white' 
                  : 'text-zinc-600 hover:text-black'}`}
                onClick={closeMobileMenu}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: isMobileMenuOpen ? 0 : -20, opacity: isMobileMenuOpen ? 1 : 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isMobileMenuOpen ? 0 : 10, opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="w-full"
            >
              <Button
                variant="expandIcon"
                className="bg-[#0e62fe] text-white w-full"
                Icon={() => <ArrowRight className="h-4 w-4" />}
                iconPlacement="right"
                onClick={() => {
                  window.location.href = "mailto:contacto@thr3e.dev";
                  closeMobileMenu();
                }}
              >
                Contactar
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
