import { 
  PencilRuler, 
  Smartphone, 
  Gauge,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <PencilRuler className="h-6 w-6 text-primary" />,
    title: "Diseño Minimalista",
    description: "Diseños limpios y elegantes que destacan el contenido importante y reflejan la identidad de tu marca."
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: "Adaptable a Todo Dispositivo",
    description: "Tu sitio se verá impecable en cualquier dispositivo, desde teléfonos móviles hasta pantallas de escritorio."
  },
  {
    icon: <Gauge className="h-6 w-6 text-primary" />,
    title: "Optimización SEO",
    description: "Implementamos las mejores prácticas para mejorar tu visibilidad en los motores de búsqueda."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Consulta Inicial",
    description: "Entendemos tu visión y objetivos en una breve reunión."
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creamos un diseño elegante basado en tus requerimientos."
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu sitio con código limpio y optimizado."
  },
  {
    number: "04",
    title: "Lanzamiento",
    description: "Tu sitio estará online en solo 3 días."
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium mb-2 tracking-wide">NUESTROS SERVICIOS</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Enfoque limpio y efectivo</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            Creamos landing pages que convierten visitantes en clientes mediante un diseño minimalista y un proceso simplificado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-neutral-100 rounded-md p-8 transition-all hover:border-neutral-200 hover:shadow-sm"
            >
              <div className="w-12 h-12 rounded-md bg-neutral-50 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-neutral-900">{service.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Process Steps */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">NUESTRO PROCESO</p>
            <h3 className="text-3xl font-semibold mb-4 text-neutral-900">Simple y Eficiente</h3>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Hemos optimizado cada paso para entregar resultados excepcionales en tiempo récord.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col">
                  <span className="text-neutral-300 text-4xl font-bold mb-6">{step.number}</span>
                  <h4 className="font-semibold text-lg mb-2 text-neutral-900">{step.title}</h4>
                  <p className="text-neutral-600 text-sm">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-5 top-4">
                      <ArrowRight className="text-neutral-200 h-5 w-5" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
