import React from "react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

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
    title: "Discusión de ideas y requisitos",
    description: "Colaboramos contigo para entender tus objetivos, público objetivo y alcance del proyecto. Todo en una reunión de solo 30 minutos."
  },
  {
    step: 1,
    title: "Del concepto al diseño final",
    description: "Transformamos tu visión en conceptos impactantes con tu participación activa, iterando hasta lograr un diseño impecable que resuene con tu audiencia."
  },
  {
    step: 2,
    title: "Desarrollo, pruebas y lanzamiento",
    description: "Convertimos el diseño en una experiencia digital perfecta, probamos rigurosamente en todas las plataformas y celebramos tu éxito con un lanzamiento impecable."
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
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">NUESTROS SERVICIOS</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Único. Digital. <span className="text-[#0e62fe]">De primera clase.</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Creamos landing pages impresionantes que desafían la forma en que los clientes navegan e interactúan en línea.
            Todo en un proceso de solo 3 días.
          </p>
          <div className="mt-8">
            <a 
              href="#contacto" 
              className="text-sm font-medium text-[#0e62fe] hover:text-[#0952d3] transition-colors duration-300 underline underline-offset-4"
            >
              Más Información
            </a>
          </div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Stepper defaultValue={2} orientation="vertical" className="w-full">
            {steps.map(({ step, title, description }) => (
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
                      </div>
                      <StepperDescription className={`text-base ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {description}
                      </StepperDescription>
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
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={`text-2xl md:text-3xl font-medium mb-6 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Cómo damos vida a las <span className="text-[#0e62fe]">ideas</span>
          </h3>
          
          <a
            href="#contacto"
            className="inline-block rounded-full px-8 py-3 bg-[#0e62fe] hover:bg-[#0952d3] text-white text-sm font-medium transition-colors duration-300"
            onMouseEnter={() => setCursorVariant("sm")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
}