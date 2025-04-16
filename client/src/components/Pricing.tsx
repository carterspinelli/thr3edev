import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const features = [
  "Diseño profesional y personalizado",
  "Desarrollo completo en 3 días",
  "Optimizado para dispositivos móviles",
  "SEO básico incluido",
  "Formulario de contacto funcional",
  "1 mes de soporte gratuito"
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Un precio fijo, sin sorpresas</h2>
            <p className="text-gray-600 text-lg mb-6">
              Olvidate de presupuestos complicados y costos inesperados. 
              Nuestro servicio tiene un precio único y transparente.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-emerald-500 mt-1 mr-3" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-5/12">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 text-center transform transition-transform hover:scale-105">
              <h3 className="font-bold text-xl mb-2">Landing Page Profesional</h3>
              <p className="text-gray-600 mb-6">La solución perfecta para tu presencia web</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-primary">$18,000</span>
                <span className="text-gray-600"> MXN</span>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-8">
                <p className="font-medium">Entrega en solo 3 días hábiles</p>
              </div>
              
              <Button 
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium"
                size="lg"
                asChild
              >
                <a href="#contacto">Solicitar ahora</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
