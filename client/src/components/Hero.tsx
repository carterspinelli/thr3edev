import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { CustomCursor, useSetCursorVariant } from "@/components/ui/custom-cursor";

export default function Hero() {
  const { cursorVariant, setCursorVariant, cursorText, setCursorText } = useSetCursorVariant();

  return (
    <>
      <CustomCursor variant={cursorVariant} text={cursorText} />
      
      <section id="inicio" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-zinc-900 text-white">
        <div className="container mx-auto px-6">
          <div className="md:grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
                Crea sitios web <br />
                <span className="text-teal-500">increíbles</span> a <Cover>velocidad supersónica</Cover>
              </h1>
              
              <p className="text-lg text-zinc-300 mb-8 tracking-tight max-w-xl">
                Landing pages profesionales en <span className="font-medium">solo 3 días</span> por 
                <span className="font-medium text-teal-500 ml-2">$18,000 MXN</span>. 
                Diseño minimalista, desarrollo eficiente, resultados garantizados.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 py-6 bg-teal-500 hover:bg-teal-600 text-zinc-900 font-medium"
                  asChild
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <a href="#contacto">Solicitar mi sitio web</a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full px-8 py-6 border border-zinc-700 text-white hover:bg-zinc-800 font-medium"
                  asChild
                  onMouseEnter={() => setCursorVariant("sm")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <a href="#portafolio">Ver proyectos</a>
                </Button>
              </div>
            </div>
            
            <div 
              className="mt-12 md:mt-0 aspect-square md:aspect-[4/3] relative overflow-hidden rounded-2xl"
              onMouseEnter={() => setCursorText("Ver diseño")}
              onMouseLeave={() => setCursorText("")}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-teal-500 to-purple-600 rounded-2xl blur-sm opacity-70"></div>
              <div className="absolute inset-1 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=90" 
                  alt="Diseño web minimalista" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
