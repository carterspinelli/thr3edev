import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-5xl mx-auto mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700">
            Crea sitios web increíbles <br /> a <Cover>velocidad supersónica</Cover>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">
            Landing pages profesionales en <span className="font-bold">solo 3 días</span> por 
            <span className="font-bold text-primary ml-2">$18,000 MXN</span>
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg max-w-2xl mx-auto">
            Diseño minimalista, desarrollo eficiente, resultados garantizados.
            Sin complicaciones ni costos ocultos.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="px-8 py-6 bg-neutral-900 hover:bg-black text-white font-medium"
              asChild
            >
              <a href="#contacto">Solicitar mi sitio web</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 border border-neutral-300 text-neutral-900 hover:bg-neutral-100 font-medium"
              asChild
            >
              <a href="#portafolio">Ver proyectos</a>
            </Button>
          </div>
          
          <div className="w-full max-w-4xl mx-auto mt-4 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Diseño web minimalista" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
