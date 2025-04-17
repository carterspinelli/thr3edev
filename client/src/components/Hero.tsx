import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { CustomCursor, useSetCursorVariant } from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export default function Hero() {
  const { cursorVariant, setCursorVariant, cursorText, setCursorText } = useSetCursorVariant();
  const { theme } = useTheme();

  return (
    <>
      <CustomCursor variant={cursorVariant} text={cursorText} />
      
      <section id="inicio" className={`pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-zinc-900'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
            {/* Background gradient blobs */}
            <div className="absolute -top-40 -left-20 w-72 h-72 bg-[#FF4D2B] rounded-full filter blur-[120px] opacity-10"></div>
            <div className="absolute -bottom-40 -right-20 w-72 h-72 bg-[#26D9A3] rounded-full filter blur-[120px] opacity-10"></div>
            
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8">
                Crea sitios web <br />
                <span className="text-[#FF4D2B]">increíbles</span> a <Cover>velocidad supersónica</Cover>
              </h1>
              
              <p className={`text-lg md:text-xl mb-10 tracking-tight max-w-3xl mx-auto ${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Landing pages profesionales en <span className="font-medium">solo 3 días</span> por 
                <span className="font-medium text-[#FF4D2B] ml-2">$18,000 MXN</span>. 
                Diseño minimalista, desarrollo eficiente, resultados garantizados.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="rounded-full px-10 py-6 bg-[#FF4D2B] hover:bg-[#e03e1f] text-white font-medium"
                asChild
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="#pricing">Solicitar mi sitio web</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className={`rounded-full px-10 py-6 font-medium ${
                  theme === 'dark'
                    ? 'border-zinc-800 text-white hover:bg-zinc-900'
                    : 'border-zinc-300 text-zinc-900 hover:bg-zinc-100'
                }`}
                asChild
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="#servicios">Nuestros servicios</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center space-x-8 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF4D2B]"></div>
                <span className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>Diseño</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FFC229]"></div>
                <span className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>Velocidad</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#26D9A3]"></div>
                <span className={`text-sm ${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'}`}>Resultados</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
