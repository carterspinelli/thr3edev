import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  CustomCursor,
  useSetCursorVariant,
} from "@/components/ui/custom-cursor";
import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";

export default function Hero() {
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
              <a 
                href="#pricing" 
                className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-6 py-3 bg-[#0e62fe] rounded-md text-white text-sm font-medium transition duration-200 ease-linear group"
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="inline-flex items-center">
                  Quiero mi landing page
                  <span className="inline-flex items-center ml-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:ml-2">
                    <span className="w-0 h-4 opacity-0 transition-all duration-300 ease-in-out group-hover:w-4 group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </span>
                </span>
              </a>
              <a 
                href="#servicios" 
                className={`border px-6 py-3 rounded-md text-sm font-medium transition duration-200 ease-linear group ${isDark ? 'border-zinc-800 text-white hover:bg-zinc-900' : 'border-zinc-200 bg-white text-zinc-800 hover:border-zinc-300'}`}
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <span className="inline-flex items-center">
                  Nuestros servicios
                  <span className="inline-flex items-center ml-0 overflow-hidden transition-all duration-300 ease-in-out group-hover:ml-2">
                    <span className="w-0 h-4 opacity-0 transition-all duration-300 ease-in-out group-hover:w-4 group-hover:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </span>
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
