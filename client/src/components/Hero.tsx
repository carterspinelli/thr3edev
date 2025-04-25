import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  CustomCursor,
  useSetCursorVariant,
} from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactModal from "./ContactModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { cursorVariant, setCursorVariant, cursorText, setCursorText } =
    useSetCursorVariant();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <CustomCursor variant={cursorVariant} text={cursorText} />

      <section
        id="inicio"
        className={`pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden ${isDark ? "bg-black text-white" : "bg-white text-zinc-900"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8">
                <span className="inline-block mb-4">Creamos tu landing page</span> <br />
                <span className="text-[#0e62fe]">profesional</span> en{" "}
                <Cover>solo 3 días</Cover>
              </h1>

              <p
                className={`text-lg md:text-xl mb-10 tracking-tight max-w-3xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Diseño, desarrollo y hosting completo por{" "}
                <span className="font-medium text-[#0e62fe]">
                  $18,000 MXN.
                </span>
                {" "} Del concepto al lanzamiento en tres días, incluyendo
                entrega del código fuente.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
                <DialogTrigger asChild>
                  <Button 
                    variant="expandIcon" 
                    size="lg"
                    className="bg-[#0e62fe] text-white"
                    Icon={() => <ArrowRight className="h-4 w-4" />} 
                    iconPlacement="right"
                    onMouseEnter={() => setCursorVariant("sm")}
                    onMouseLeave={() => setCursorVariant("default")}
                  >
                    Quiero mi landing page
                  </Button>
                </DialogTrigger>
                
                <ContactModal 
                  open={isContactModalOpen} 
                  onOpenChange={setIsContactModalOpen} 
                />
              </Dialog>
              
              <Button 
                variant="expandIconNeutral" 
                size="lg"
                className={`${isDark ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-800' : 'bg-white text-zinc-800 hover:bg-white'}`}
                Icon={() => <ArrowRight className="h-4 w-4" />} 
                iconPlacement="right"
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
                onClick={() => window.location.href = "#nuestro-proceso"}
              >
                Nuestros servicios
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
