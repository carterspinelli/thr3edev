import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="inicio" className="pt-28 md:pt-36 pb-16 md:pb-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Sitios web profesionales <span className="text-primary">en solo 3 días</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              Landing pages de alta conversión por solo <span className="font-bold text-orange-500">$18,000 MXN</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Diseño profesional, desarrollo rápido, resultados garantizados. Sin sorpresas ni costos ocultos.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-blue-600 text-white font-medium"
                asChild
              >
                <a href="#contacto">Solicitar mi sitio web</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border border-primary text-primary hover:bg-blue-50 font-medium"
                asChild
              >
                <a href="#portafolio">Ver proyectos</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Diseño web moderno" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
