import { 
  PencilRuler, 
  Smartphone, 
  Gauge,
  MessageSquare,
  Briefcase,
  Rocket
} from "lucide-react";

const services = [
  {
    icon: <PencilRuler className="h-8 w-8 text-primary" />,
    title: "Diseño Personalizado",
    description: "Diseño único adaptado a tu marca y objetivos comerciales. Creamos experiencias visuales que reflejan tu identidad."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "100% Responsivo",
    description: "Tu sitio se verá perfecto en cualquier dispositivo, desde móviles hasta computadoras de escritorio."
  },
  {
    icon: <Gauge className="h-8 w-8 text-primary" />,
    title: "Optimización SEO",
    description: "Implementamos las mejores prácticas para que tu sitio sea encontrado por clientes potenciales en los motores de búsqueda."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Consulta Inicial",
    description: "Entendemos tus necesidades y objetivos en una breve reunión."
  },
  {
    number: 2,
    title: "Diseño",
    description: "Creamos un diseño atractivo basado en tus requerimientos."
  },
  {
    number: 3,
    title: "Desarrollo",
    description: "Construimos tu sitio con código limpio y optimizado."
  },
  {
    number: 4,
    title: "Lanzamiento",
    description: "¡Tu sitio estará listo y online en solo 3 días!"
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Creamos landing pages profesionales que convierten visitantes en clientes. Un proceso simple y efectivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 transition-transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Process Steps */}
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Nuestro Proceso: Simple y Eficiente</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
