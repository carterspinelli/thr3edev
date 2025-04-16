import { BoltIcon, BanknoteIcon, StarIcon } from "lucide-react";
import { useSetCursorVariant } from "@/components/ui/custom-cursor";

export default function ValueBanner() {
  const { setCursorText } = useSetCursorVariant();
  
  return (
    <section className="py-16 bg-zinc-800 border-y border-zinc-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div 
            className="flex flex-col items-center group"
            onMouseEnter={() => setCursorText("Rapidez")}
            onMouseLeave={() => setCursorText("")}
          >
            <div className="mb-5 w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500/20">
              <BoltIcon className="h-6 w-6 text-teal-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Entrega en 3 días</h3>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto">De la idea al lanzamiento en tiempo récord</p>
          </div>
          
          <div 
            className="flex flex-col items-center group"
            onMouseEnter={() => setCursorText("Precio")}
            onMouseLeave={() => setCursorText("")}
          >
            <div className="mb-5 w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500/20">
              <BanknoteIcon className="h-6 w-6 text-teal-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Precio fijo: $18,000 MXN</h3>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto">Sin costos ocultos ni sorpresas</p>
          </div>
          
          <div 
            className="flex flex-col items-center group"
            onMouseEnter={() => setCursorText("Diseño")}
            onMouseLeave={() => setCursorText("")}
          >
            <div className="mb-5 w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center transition-all duration-300 group-hover:bg-teal-500/20">
              <StarIcon className="h-6 w-6 text-teal-500" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-white">Diseño minimalista</h3>
            <p className="text-zinc-400 text-sm max-w-xs mx-auto">Sitios elegantes optimizados para conversión</p>
          </div>
        </div>
      </div>
    </section>
  );
}
