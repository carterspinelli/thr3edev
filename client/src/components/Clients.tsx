import React, { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { ThemeComparison } from "@/components/ui/theme-comparison";

// Logo paths
const clientLogos = [
  { 
    id: 1, 
    name: "IBM", 
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" 
  },
  { 
    id: 2, 
    name: "Udemy", 
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg" 
  },
  { 
    id: 3, 
    name: "Docusaurus", 
    src: "https://docusaurus.io/img/docusaurus.svg" 
  },
  { 
    id: 4, 
    name: "Metamask", 
    src: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" 
  }
];

// Componente de tema claro
const LightThemeSection = () => {
  return (
    <div className="bg-white w-full h-full flex items-center justify-center py-16 rounded-xl">
      <div className="w-full px-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            Modo claro
          </div>
        </div>
        <LogoCarousel logos={clientLogos} columns={2} />
      </div>
    </div>
  );
};

// Componente de tema oscuro con estrellas
const DarkThemeSection = () => {
  return (
    <div className="bg-[#050715] w-full h-full relative overflow-hidden rounded-xl">
      {/* Fondo de estrellas */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,98,254,0.1)_0%,rgba(0,0,0,0)_80%)]" />
      <div className="stars absolute inset-0" />
      
      {/* Múltiples capas de estrellas fugaces */}
      <ShootingStars
        starColor="#0e62fe"
        trailColor="#2EB9DF"
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor="#3b82f6"
        trailColor="#0e62fe"
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor="#60a5fa"
        trailColor="#2563eb"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />
      
      {/* Contenido */}
      <div className="w-full px-6 py-16 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-900 text-blue-100">
            Modo oscuro
          </div>
        </div>
        <LogoCarousel logos={clientLogos} columns={2} />
      </div>
    </div>
  );
};

export default function Clients() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 relative overflow-hidden ${isDark ? 'bg-[#050715]' : 'bg-zinc-50'}`}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium tracking-wide">CLIENTES DESTACADOS</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            Marcas que confían en nosotros
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Diseñamos experiencias web para empresas líderes que buscan destacar en el mercado digital
          </p>
        </motion.div>

        <div className="mt-4 mb-8">
          <ThemeComparison 
            lightComponent={<LightThemeSection />}
            darkComponent={<DarkThemeSection />}
            label="Modo claro / oscuro"
            title="Experimenta las dos modalidades de diseño"
            description="Desliza el control central de izquierda a derecha para comparar nuestros diseños en modo claro y oscuro. El modo oscuro incluye efectos especiales de estrellas fugaces para crear una experiencia única."
            className="rounded-xl"
          />
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className={`text-base max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Nos especializamos en la creación de landing pages de alto impacto con tiempos de entrega récord de solo 3 días y a un precio fijo de $18,000 MXN.
          </p>
        </motion.div>
      </div>
    </section>
  );
}