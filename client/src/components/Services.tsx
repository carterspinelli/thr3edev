import * as React from "react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { ColorBlock } from "@/components/ui/color-block";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { ChessKnightIcon, PencilIcon, LaptopIcon, SpeedometerIcon } from "@/components/ui/service-custom-icons";
import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

const serviceBlocks = [
  {
    number: "01",
    title: "Diseño",
    description: "Creamos experiencias digitales que cautivan a tu audiencia y reflejan la identidad de tu marca.",
    color: "yellow" as const,
    icon: <PencilIcon />,
    detailedDescription: "Cada diseño es creado específicamente para tu marca, con un enfoque en la experiencia de usuario. Utilizamos principios modernos de diseño web para asegurar que la landing page no solo sea visualmente atractiva, sino también enfocada en la conversión."
  },
  {
    number: "02",
    title: "Desarrollo",
    description: "Construimos landing pages optimizadas con las mejores tecnologías y prácticas del mercado.",
    color: "green" as const,
    icon: <LaptopIcon />,
    detailedDescription: "Utilizamos tecnologías de vanguardia para desarrollar tu landing page. Nuestro código es limpio, semántico y optimizado para SEO. Implementamos las mejores prácticas de desarrollo para asegurar velocidad de carga y compatibilidad con todos los dispositivos."
  },
  {
    number: "03",
    title: "Velocidad",
    description: "Entregamos tu landing page lista para usar en solo 3 días a un precio fijo de $18,000 MXN.",
    color: "red" as const,
    icon: <SpeedometerIcon />,
    detailedDescription: "Nuestro proceso optimizado nos permite entregar resultados de alta calidad en tiempo récord. En solo 72 horas tendrás una landing page profesional y lista para publicar. Todo a un precio fijo y transparente de $18,000 MXN, sin costos adicionales ni sorpresas."
  }
];

export default function Services() {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
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
          <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Creamos experiencias impactantes</h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Diseñamos landing pages que convierten visitantes en clientes mediante un proceso perfeccionado y entregas ultrarrápidas.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-8">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`p-5 md:p-8 rounded-2xl border ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-200 bg-white'} relative overflow-hidden mb-8`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br opacity-10 ${
                activeStep === 0 ? 'from-yellow-200 to-yellow-600' : 
                activeStep === 1 ? 'from-green-200 to-green-600' : 
                'from-red-200 to-red-600'
              }`} />
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                      activeStep === 0 ? 'bg-yellow-500/20 text-yellow-500' : 
                      activeStep === 1 ? 'bg-green-500/20 text-green-500' : 
                      'bg-red-500/20 text-red-500'
                    }`}>
                      {serviceBlocks[activeStep].icon}
                    </div>
                  </div>
                  <div>
                    <p className={`text-sm text-[#0e62fe] font-semibold`}>
                      {serviceBlocks[activeStep].number}
                    </p>
                    <h3 className={`text-xl md:text-2xl font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                      {serviceBlocks[activeStep].title}
                    </h3>
                  </div>
                </div>
                
                <div className={`text-base leading-relaxed mt-4 ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                  {serviceBlocks[activeStep].detailedDescription}
                </div>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-3 gap-3">
              {serviceBlocks.map((block, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    activeStep === index 
                      ? `border-2 border-[#0e62fe] ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}` 
                      : `border ${theme === 'dark' ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-200 bg-white'}`
                  } rounded-xl p-3 transition-all hover:translate-y-[-2px]`}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className={`h-10 w-10 mx-auto mb-2 ${
                    block.color === 'yellow' ? 'text-yellow-500' : 
                    block.color === 'green' ? 'text-green-500' : 
                    'text-red-500'
                  }`}>
                    {block.icon}
                  </div>
                  <p className={`text-center text-xs font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                    {block.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <motion.div
            className={`p-6 md:p-8 rounded-lg ${theme === 'dark' ? 'bg-zinc-900/50' : 'bg-zinc-50'} border ${theme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <div className="w-2 h-12 bg-[#0e62fe] rounded-full mr-4"></div>
              <h3 className={`text-xl md:text-2xl font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                Nuestro <span className="text-[#0e62fe]">proceso</span>
              </h3>
            </div>
            
            <Stepper 
              value={activeStep} 
              onValueChange={(value) => setActiveStep(value)}
              orientation="vertical" 
              className="ml-3"
            >
              {serviceBlocks.map((block, index) => (
                <StepperItem
                  key={index}
                  step={index + 1}
                  className="relative items-start pb-12 last:pb-0"
                  completed={index < activeStep}
                >
                  <StepperTrigger 
                    className="items-start hover:scale-105 transition-transform w-full" 
                    onMouseEnter={() => setCursorVariant("sm")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <StepperIndicator className="h-10 w-10 text-base" />
                    <div className="mt-0.5 px-4 text-left">
                      <StepperTitle className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                        {block.title}
                      </StepperTitle>
                      <StepperDescription className={`text-sm mt-1 leading-relaxed ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {block.description}
                      </StepperDescription>
                    </div>
                  </StepperTrigger>
                  
                  {index < serviceBlocks.length - 1 && (
                    <StepperSeparator className="absolute inset-y-0 left-4 top-10 -order-1 m-0 -translate-x-1/2 h-[calc(100%-2.5rem)]" />
                  )}
                </StepperItem>
              ))}
            </Stepper>
            
            <div className="mt-8 pl-16">
              <p className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'}`}>
                <span className="text-[#0e62fe] font-medium">*</span> Nuestro objetivo es entregar un producto de calidad en tiempo récord.
              </p>
            </div>
          </motion.div>
        </div>
        
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
