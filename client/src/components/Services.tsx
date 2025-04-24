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
    title: "Reunión inicial (30 min)",
    description: "Empezamos con una reunión breve para comprender tu negocio y los objetivos específicos de tu landing page."
  },
  {
    step: 1,
    title: "Diseño y desarrollo",
    description: "Utilizamos las mejores tecnologías actuales para crear una landing page optimizada que refleje la identidad de tu marca."
  },
  {
    step: 2,
    title: "Entrega completa",
    description: "En solo 3 días recibes tu landing page lista en la web, junto con el código fuente completo por $18,000 MXN."
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
            Del concepto al lanzamiento <span className="text-[#0e62fe]">en 3 días</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Comenzamos con una reunión de 30 minutos para entender tu negocio, diseñamos y desarrollamos con las mejores tecnologías, y entregamos todo en solo 3 días.
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