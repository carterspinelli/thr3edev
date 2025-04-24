import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden" style={{ background: 'var(--background)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-white">
            ¿Necesitas una landing page profesional de inmediato?
          </h2>
          <p className="text-xl text-neutral-300 mb-12 leading-relaxed">
            Una reunión de 30 minutos y 3 días después tu sitio está listo. Diseño, desarrollo y hosting incluidos por $18,000 MXN, con entrega completa del código.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="expandIcon"
              size="lg"
              className="bg-white text-neutral-900 px-8"
              Icon={() => <ArrowRight className="h-4 w-4" />}
              iconPlacement="right"
              onClick={() => window.location.href = "#contacto"}
            >
              Solicitar mi sitio web
            </Button>
            <Button 
              variant="expandIcon"
              size="lg"
              className="bg-transparent border border-neutral-700 text-white hover:bg-neutral-800"
              Icon={() => <ArrowRight className="h-4 w-4" />}
              iconPlacement="right"
              onClick={() => window.location.href = "#portafolio"}
            >
              Ver más ejemplos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
