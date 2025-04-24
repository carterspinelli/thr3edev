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
    title: "Día 1: Brief + Concepto",
    description: "30 minutos. Una sola llamada. Capturamos tu visión, objetivos y requerimientos específicos. El reloj comienza a correr."
  },
  {
    step: 1,
    title: "Día 2: Diseño + Código",
    description: "Nuestro equipo trabaja en paralelo. Diseñadores y desarrolladores colaboran simultáneamente. Eficiencia absoluta."
  },
  {
    step: 2,
    title: "Día 3: Entrega + Lanzamiento",
    description: "Sitio desplegado, código fuente entregado, dominio configurado. $18,000 MXN. Misión cumplida. Siguiente proyecto."
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
          <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">MÉTODO TH3EE</p>
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
            Tres días. <span className="text-[#0e62fe]">Tres pasos.</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Un sistema optimizado para la eficiencia. Cada día cuenta. Cada acción importa.
            Sin reuniones innecesarias ni revisiones interminables. Solo resultados.
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


      </div>
    </section>
  );
}