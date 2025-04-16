import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Increíble servicio. Mi sitio web estaba listo en 3 días como prometieron y el diseño minimalista superó mis expectativas. Definitivamente los recomendaría a cualquier empresa que busque establecer presencia online rápidamente.",
    author: "Alejandra Rodríguez",
    role: "Consultora Financiera",
    rating: 5
  },
  {
    id: 2,
    content: "La mejor inversión para mi negocio. El proceso fue rápido y profesional. Ya estamos viendo un aumento en nuestras consultas gracias a la nueva página. La simplicidad del diseño realmente destaca nuestra oferta de servicios.",
    author: "Miguel Vázquez",
    role: "Clínica Dental",
    rating: 5
  },
  {
    id: 3,
    content: "Precio justo y resultado profesional. Lo que más me gustó fue la claridad en el proceso y el cumplimiento de los plazos. El diseño minimalista refleja perfectamente la elegancia de nuestra marca.",
    author: "Laura Castillo",
    role: "Boutique de Moda",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary text-sm font-medium mb-2 tracking-wide">TESTIMONIOS</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-900">Lo que dicen nuestros clientes</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Experiencias de empresas que confiaron en nuestro servicio de diseño web rápido y elegante.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-neutral-50 border border-neutral-100 rounded-md p-8"
              >
                <div className="flex mb-6 text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400" />
                  ))}
                </div>
                
                <blockquote>
                  <p className="text-neutral-700 text-base leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>
                </blockquote>
                
                <div className="border-t border-neutral-200 pt-6">
                  <cite className="not-italic">
                    <div className="font-medium text-neutral-900">{testimonial.author}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  </cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
