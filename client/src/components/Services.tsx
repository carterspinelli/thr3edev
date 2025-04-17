
import React from "react";
import { motion } from "framer-motion";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { ColorBlock } from "@/components/ui/color-block";
import { 
  ChessKnightIcon, 
  PencilIcon, 
  LaptopIcon, 
  SpeedometerIcon 
} from "@/components/ui/service-custom-icons";

const Services = () => {
  const setCursorVariant = useSetCursorVariant();

  return (
    <section className="w-full relative px-6 py-24 md:py-36 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-20 max-w-3xl" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">Nuestros Servicios</h2>
          <p className="text-lg text-zinc-400">
            Cada landing page está diseñada para impulsar las conversiones con un enfoque metódico y probado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ColorBlock 
            className="p-12 rounded-3xl flex flex-col justify-between"
            backgroundColor="#1A0F0F"
            textColor="#FF5252"
            initialColor="#190C0C"
            animationDelay={0.1}
          >
            <div className="flex justify-between items-start mb-16">
              <span className="text-6xl font-bold">01</span>
              <ChessKnightIcon />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Estrategia</h3>
              <p className="text-zinc-400">
                Analizamos tu negocio y definimos la mejor estrategia para convertir visitantes en clientes.
              </p>
            </div>
          </ColorBlock>

          <ColorBlock 
            className="p-12 rounded-3xl flex flex-col justify-between"
            backgroundColor="#1A1700"
            textColor="#FFD600"
            initialColor="#151300"
            animationDelay={0.2}
          >
            <div className="flex justify-between items-start mb-16">
              <span className="text-6xl font-bold">02</span>
              <PencilIcon />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Diseño</h3>
              <p className="text-zinc-400">
                Creamos experiencias digitales que cautivan a tu audiencia y reflejan la identidad de tu marca.
              </p>
            </div>
          </ColorBlock>

          <ColorBlock 
            className="p-12 rounded-3xl flex flex-col justify-between"
            backgroundColor="#0F1A14"
            textColor="#4ADE80"
            initialColor="#0C150E"
            animationDelay={0.3}
          >
            <div className="flex justify-between items-start mb-16">
              <span className="text-6xl font-bold">03</span>
              <LaptopIcon />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Desarrollo</h3>
              <p className="text-zinc-400">
                Construimos landing pages optimizadas con las mejores tecnologías y prácticas del mercado.
              </p>
            </div>
          </ColorBlock>

          <ColorBlock 
            className="p-12 rounded-3xl flex flex-col justify-between"
            backgroundColor="#1A0F00"
            textColor="#FF5C00"
            initialColor="#150D00"
            animationDelay={0.4}
          >
            <div className="flex justify-between items-start mb-16">
              <span className="text-6xl font-bold">04</span>
              <SpeedometerIcon />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Velocidad</h3>
              <p className="text-zinc-400">
                Optimizamos cada aspecto para asegurar tiempos de carga ultrarrápidos y una experiencia fluida.
              </p>
            </div>
          </ColorBlock>
        </div>
      </div>
    </section>
  );
};

export default Services;
