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

  return (
    <>
      <CustomCursor variant={cursorVariant} text={cursorText} />

      <section
        id="inicio"
        className={`pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden ${theme === "dark" ? "bg-black text-white" : "bg-white text-zinc-900"}`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto relative">
            {/* Background elements removed */}

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-8">
                <span className="inline-block mb-4">Landing pages</span> <br />
                <span className="text-[#0e62fe]">profesionales</span> en{" "}
                <Cover>solo 3 días</Cover>
              </h1>

              <p
                className={`text-lg md:text-xl mb-10 tracking-tight max-w-3xl mx-auto ${theme === "dark" ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Diseño, desarrollo y hosting completo por{" "}
                <span className="font-medium text-[#0e62fe]">
                  $18,000 MXN
                </span>
                {" "}precio fijo. Del concepto al lanzamiento en tres días, incluyendo
                entrega del código fuente.
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
                className="rounded-full px-10 py-6 bg-[#0e62fe] hover:bg-[#0952d3] text-white font-medium"
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
                  theme === "dark"
                    ? "border-zinc-800 text-white hover:bg-zinc-900"
                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-100"
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
                <div className="w-3 h-3 rounded-full bg-[#0e62fe]"></div>
                <span
                  className={`text-sm ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"}`}
                >
                  Diseño
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FFC229]"></div>
                <span
                  className={`text-sm ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"}`}
                >
                  Velocidad
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#26D9A3]"></div>
                <span
                  className={`text-sm ${theme === "dark" ? "text-zinc-500" : "text-zinc-600"}`}
                >
                  Resultados
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
