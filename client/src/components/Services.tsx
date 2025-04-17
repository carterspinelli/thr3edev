import React from "react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { PencilIcon, LaptopIcon, SpeedometerIcon } from "@/components/ui/service-custom-icons";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const steps = [
  {
    step: 0,
    title: "Diseño Atractivo",
    description: "Creamos experiencias digitales que cautivan a tu audiencia y reflejan la identidad de tu marca.",
    icon: <PencilIcon className="h-12 w-12 text-[#0e62fe]" />
  },
  {
    step: 1,
    title: "Desarrollo Optimizado",
    description: "Construimos landing pages optimizadas con las mejores tecnologías y prácticas del mercado.",
    icon: <LaptopIcon className="h-12 w-12 text-[#0e62fe]" />
  },
  {
    step: 2,
    title: "Entrega Ultrarrápida",
    description: "Entregamos tu landing page lista para usar en solo 3 días a un precio fijo de $18,000 MXN.",
    icon: <SpeedometerIcon className="h-12 w-12 text-[#0e62fe]" />
  },
];

export default function Services() {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();
  
  return (
    <section id="servicios" className={`py-20 md:py-28 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">NUESTRO PROCESO</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            De la idea al lanzamiento <span className="text-[#0e62fe]">en 3 pasos</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Diseñamos landing pages que convierten visitantes en clientes mediante un proceso perfeccionado y entregas ultrarrápidas.
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Stepper defaultValue={2} orientation="vertical" className="w-full">
            {steps.map(({ step, title, description, icon }) => (
              <StepperItem 
                key={step} 
                step={step}
                className="relative items-start pb-10 [&:not(:last-child)]:flex-1"
                completed={true}
              >
                <StepperTrigger className="items-start text-left w-full">
                  <div className="flex items-start gap-6 w-full">
                    <StepperIndicator className="mt-1" />
                    <div className={`flex flex-1 flex-col ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      <div className="flex items-center justify-between">
                        <StepperTitle className="text-xl md:text-2xl font-bold mb-2">{title}</StepperTitle>
                        <div className="hidden md:block">
                          {icon}
                        </div>
                      </div>
                      <StepperDescription className={`text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {description}
                      </StepperDescription>
                      <div className="block md:hidden mt-4">{icon}</div>
                    </div>
                  </div>
                </StepperTrigger>
                {step < steps.length - 1 && (
                  <StepperSeparator className="absolute inset-y-0 left-3 top-12 -order-1 m-0 -translate-x-1/2 h-full" />
                )}
              </StepperItem>
            ))}
          </Stepper>
        </motion.div>
        
        <motion.div 
          className={`mt-24 p-8 rounded-lg ${
            theme === 'dark' 
              ? 'bg-zinc-900 border border-zinc-800' 
              : 'bg-zinc-100 border border-zinc-200'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onMouseEnter={() => setCursorText("3 días")}
          onMouseLeave={() => setCursorText("")}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-10">
              <h3 className={`text-2xl md:text-3xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                De la idea al lanzamiento <span className="text-[#0e62fe]">en 3 días</span>
              </h3>
              <p className={`text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Hemos perfeccionado nuestro proceso para entregar landing pages de alta calidad en tiempo récord. 
                Sin complicaciones, sin costos ocultos, solo resultados excepcionales a un precio fijo de $18,000 MXN.
              </p>
            </div>
            <div className="flex space-x-3 items-center">
              <div className="w-3 h-3 rounded-full bg-[#0e62fe]"></div>
              <div className="w-3 h-3 rounded-full bg-[#0e62fe] opacity-70"></div>
              <div className="w-3 h-3 rounded-full bg-[#0e62fe] opacity-40"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
