import React from "react";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { LogoCarousel } from "@/components/ui/logo-carousel";

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

  return (
    <section className={`py-16 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center space-y-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium tracking-wide">CLIENTES DESTACADOS</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Marcas que confían en nosotros
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Diseñamos experiencias web para empresas líderes que buscan destacar en el mercado digital
          </p>
        </motion.div>

        <div className={`rounded-xl p-8 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} border ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <LogoCarousel logos={clientLogos} columns={2} />
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Nos especializamos en la creación de landing pages de alto impacto con tiempos de entrega récord de solo 3 días y a un precio fijo de $18,000 MXN.
          </p>
        </motion.div>
      </div>
    </section>
  );
}