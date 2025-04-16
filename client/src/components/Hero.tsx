import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { CustomCursor, useSetCursorVariant } from "@/components/ui/custom-cursor";
import { motion } from "framer-motion";

export default function Hero() {
  const { cursorVariant, setCursorVariant, cursorText, setCursorText } = useSetCursorVariant();

  return (
    <>
      <CustomCursor variant={cursorVariant} text={cursorText} />
      
      <section id="inicio" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-black text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="md:grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                  Crea sitios web <br />
                  <span className="text-[#FF4D2B]">increíbles</span> a <Cover>velocidad supersónica</Cover>
                </h1>
                
                <p className="text-lg text-zinc-400 mb-8 tracking-tight max-w-xl">
                  Landing pages profesionales en <span className="font-medium">solo 3 días</span> por 
                  <span className="font-medium text-[#FF4D2B] ml-2">$18,000 MXN</span>. 
                  Diseño minimalista, desarrollo eficiente, resultados garantizados.
                </p>
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 bg-[#FF4D2B] hover:bg-[#e03e1f] text-white font-medium"
                  asChild
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <a href="#contacto">Solicitar mi sitio web</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 border border-zinc-800 text-white hover:bg-zinc-900 font-medium"
                  asChild
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <a href="#portafolio">Ver proyectos</a>
                </Button>
              </motion.div>
              
              <motion.div 
                className="hidden md:flex mt-10 space-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF4D2B]"></div>
                  <span className="text-zinc-500 text-sm">Diseño</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#FFC229]"></div>
                  <span className="text-zinc-500 text-sm">Velocidad</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#26D9A3]"></div>
                  <span className="text-zinc-500 text-sm">Resultados</span>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-12 md:mt-0 aspect-square md:aspect-[4/3] relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onMouseEnter={() => setCursorText("Ver diseño")}
              onMouseLeave={() => setCursorText("")}
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#FF4D2B] rounded-full filter blur-[80px] opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#26D9A3] rounded-full filter blur-[80px] opacity-20"></div>
              
              <motion.div 
                className="absolute -inset-0.5 bg-gradient-to-br from-[#FF4D2B] to-[#26D9A3] rounded-lg"
                initial={{ opacity: 0.4 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              
              <div className="absolute inset-1 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=90" 
                  alt="Diseño web minimalista" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <motion.div 
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
                initial={{ y: 60 }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-medium">Landing page para negocio local</p>
                <p className="text-zinc-300 text-sm">Diseño y desarrollo en 3 días</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
