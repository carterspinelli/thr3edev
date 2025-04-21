import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { ShootingStars } from "@/components/ui/shooting-stars";

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

export default function Clients() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`py-16 relative overflow-hidden ${isDark ? 'bg-[#050715]' : 'bg-zinc-50'}`}>
      {/* Fondo de estrellas (visible solo en modo oscuro) */}
      {isDark && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,98,254,0.1)_0%,rgba(0,0,0,0)_80%)]" />
          <div className="stars absolute inset-0" />
          
          {/* Múltiples capas de estrellas fugaces con diferentes colores y velocidades */}
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
        </>
      )}

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

        <div className={`rounded-xl p-8 ${isDark ? 'bg-zinc-900/80 backdrop-blur-sm' : 'bg-white'} border ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <LogoCarousel logos={clientLogos} columns={2} />
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

      {/* Estilos para las estrellas fijas en el fondo */}
      {isDark && (
        <style jsx>{`
          .stars {
            background-image: 
              radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: twinkle 5s ease-in-out infinite;
            opacity: 0.3;
          }

          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 0.3; }
            100% { opacity: 0.2; }
          }
        `}</style>
      )}
    </section>
  );
}