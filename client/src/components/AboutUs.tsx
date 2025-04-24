import { 
  Paintbrush, 
  Code, 
  Rocket, 
  Headphones 
} from "lucide-react";

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nuestro equipo" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Quiénes Somos</h2>
            <p className="text-gray-600 text-lg mb-6">
              Somos un equipo de diseñadores y desarrolladores web apasionados por crear sitios web efectivos, hermosos y funcionales en tiempo récord.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Nuestra misión es simplificar el proceso de creación web para pequeñas y medianas empresas, ofreciendo un servicio rápido, profesional y a un precio justo.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Con años de experiencia en la industria, hemos optimizado nuestro flujo de trabajo para entregar resultados excepcionales en solo 3 días.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary mr-4">
                  <Paintbrush className="h-5 w-5" />
                </div>
                <span className="font-medium">Diseñadores expertos</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary mr-4">
                  <Code className="h-5 w-5" />
                </div>
                <span className="font-medium">Desarrolladores senior</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary mr-4">
                  <Rocket className="h-5 w-5" />
                </div>
                <span className="font-medium">Entrega rápida</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-primary mr-4">
                  <Headphones className="h-5 w-5" />
                </div>
                <span className="font-medium">Soporte continuo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
