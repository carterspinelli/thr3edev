import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-20 md:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            ¿Listo para lanzar tu sitio web en tiempo récord?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            En solo 3 días tendrás una landing page elegante y minimalista por $18,000 MXN.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="px-10 py-6 bg-white text-neutral-900 hover:bg-neutral-200 font-medium"
              asChild
            >
              <a href="#contacto">Solicitar mi sitio web</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-6 border-neutral-700 hover:bg-neutral-800 text-white font-medium"
              asChild
            >
              <a href="#portafolio">Ver más ejemplos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
