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
                <span className="inline-block mb-4">Diseño + Código.</span> <br />
                <span className="text-[#0e62fe]">72 horas.</span> Un{" "}
                <Cover>sitio increíble.</Cover>
              </h1>

              <p
                className={`text-lg md:text-xl mb-10 tracking-tight max-w-3xl mx-auto ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                Somos disruptores del diseño web. Transformamos ideas en landing pages 
                de alto impacto en solo 3 días por{" "}
                <span className="font-medium text-[#0e62fe]">
                  $18,000 MXN
                </span>
                {" "}todo incluido. Código limpio. Diseño cautivador. Sin esperas.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-6 z-10"
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
                <a href="#pricing">Lanzar en 3 días →</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className={`rounded-full px-10 py-6 font-medium ${
                  isDark
                    ? "border-zinc-800 text-white hover:bg-zinc-900 hover:border-[#0e62fe]"
                    : "border-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:border-[#0e62fe]"
                }`}
                asChild
                onMouseEnter={() => setCursorVariant("sm")}
                onMouseLeave={() => setCursorVariant("default")}
              >
                <a href="#servicios">Ver nuestro proceso</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
