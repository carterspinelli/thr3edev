import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueBanner from "@/components/ValueBanner";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Technologies from "@/components/Technologies";
import Clients from "@/components/Clients";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  // Verificar si hay un parámetro en el sessionStorage para hacer scroll a una sección específica
  useEffect(() => {
    const scrollToSection = sessionStorage.getItem('scrollToSection');
    
    if (scrollToSection) {
      // Esperar a que los componentes se monten y luego hacer scroll a la sección
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollToSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        // Limpiar el storage después de usarlo
        sessionStorage.removeItem('scrollToSection');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  return (
    <div className="min-h-screen font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueBanner />
        <Services />
        <Clients />
        <Technologies />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
