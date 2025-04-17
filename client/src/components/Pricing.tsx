import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

const features = [
  "Diseño minimalista y elegante",
  "Entrega en solo 3 días",
  "Adaptado a todos los dispositivos",
  "SEO básico incluido",
  "Formulario de contacto funcional",
  "1 mes de soporte técnico"
];

export default function Pricing() {
  const { setCursorVariant, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();
  
  return (
    <section className={`py-20 md:py-28 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#FFC229] text-sm font-medium mb-2 tracking-wide">PRECIOS TRANSPARENTES</p>
            <h2 className={`text-3xl md:text-4xl font-medium mb-4 ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>Un precio fijo, sin sorpresas</h2>
            <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Sin presupuestos complicados ni costos ocultos. Solo una tarifa simple y predecible.
            </p>
          </motion.div>
          
          <motion.div
            className="relative rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setCursorText("Ver detalles")}
            onMouseLeave={() => setCursorText("")}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFC229] to-[#FF4D2B] rounded-lg blur-sm opacity-50"></div>
            <div className={`relative ${
              theme === 'dark' 
                ? 'bg-[#1A1505] border-zinc-800' 
                : 'bg-[#FFFAF0] border-zinc-200'
              } border rounded-lg p-10 md:p-12`}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                <div className="md:w-1/2 mb-10 md:mb-0">
                  <h3 className="text-xl font-medium mb-3 text-[#FFC229]">Landing Page Profesional</h3>
                  <p className={`text-sm mb-6 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>Todo lo que necesitas para establecer tu presencia web</p>
                  
                  <ul className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <div className="mt-0.5 mr-3 w-5 h-5 rounded-full bg-[#FFC229]/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-3 w-3 text-[#FFC229]" />
                        </div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className={`md:w-5/12 w-full md:border-l md:pl-10 flex flex-col items-center md:items-start ${
                  theme === 'dark' ? 'md:border-zinc-800' : 'md:border-zinc-300'
                }`}>
                  <motion.div 
                    className="mb-2"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>$18,000</span>
                    <span className={`ml-1 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>MXN</span>
                  </motion.div>
                  <p className={`text-sm mb-8 ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>Precio único, sin cargos adicionales</p>
                  
                  <div className="mb-8 w-full">
                    <div className="py-3 px-4 bg-[#FFC229]/10 rounded-md border border-[#FFC229]/30 text-center">
                      <p className="text-[#FFC229] text-sm">Entrega garantizada en 3 días hábiles</p>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full py-6 bg-[#FFC229] hover:bg-[#e6af25] text-black font-medium rounded-full"
                    size="lg"
                    asChild
                    onMouseEnter={() => setCursorVariant("sm")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    <a href="#contacto">Solicitar mi sitio web</a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-6 text-center text-zinc-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            * Las integraciones adicionales pueden tener un costo extra según su complejidad
          </motion.div>
        </div>
      </div>
    </section>
  );
}
