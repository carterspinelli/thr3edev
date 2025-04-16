import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section className="py-16 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para lanzar tu sitio web en tiempo récord?</h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          En solo 3 días tendrás una landing page profesional por $18,000 MXN.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            size="lg" 
            variant="secondary" 
            className="px-8 py-4 bg-white text-primary hover:bg-blue-50"
            asChild
          >
            <a href="#contacto">Solicitar mi sitio web</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-4 border-2 border-white hover:bg-white/10 text-white"
            asChild
          >
            <a href="#portafolio">Ver más ejemplos</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
