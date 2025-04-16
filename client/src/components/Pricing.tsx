import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "Diseño minimalista y elegante",
  "Entrega en solo 3 días",
  "Adaptado a todos los dispositivos",
  "SEO básico incluido",
  "Formulario de contacto funcional",
  "1 mes de soporte técnico"
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-neutral-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">PRECIOS TRANSPARENTES</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Un precio fijo, sin sorpresas</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Sin presupuestos complicados ni costos ocultos. Solo una tarifa simple y predecible.
            </p>
          </div>
          
          <div className="bg-neutral-50 border border-neutral-100 rounded-lg p-10 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">Landing Page Profesional</h3>
                <p className="text-neutral-500 text-sm mb-6">Todo lo que necesitas para establecer tu presencia web</p>
                
                <ul className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-0.5 mr-3 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-emerald-500" />
                      </div>
                      <span className="text-neutral-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="md:w-5/12 w-full md:border-l md:border-neutral-200 md:pl-10 flex flex-col items-center md:items-start">
                <div className="mb-2">
                  <span className="text-5xl font-bold text-neutral-900">$18,000</span>
                  <span className="text-neutral-500 ml-1">MXN</span>
                </div>
                <p className="text-neutral-600 text-sm mb-8">Precio único, sin cargos adicionales</p>
                
                <div className="mb-8 w-full">
                  <div className="py-3 px-4 bg-emerald-50 rounded-md border border-emerald-100 text-center">
                    <p className="text-emerald-700 text-sm">Entrega garantizada en 3 días hábiles</p>
                  </div>
                </div>
                
                <Button 
                  className="w-full py-6 bg-neutral-900 hover:bg-black text-white font-medium"
                  size="lg"
                  asChild
                >
                  <a href="#contacto">Solicitar mi sitio web</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
