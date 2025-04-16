import { Card, CardContent } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "Increíble servicio. Mi sitio web estaba listo en 3 días como prometieron y el diseño superó mis expectativas. Definitivamente los recomendaría.",
    author: "Alejandra Rodríguez",
    role: "Consultora Financiera",
    rating: 5,
    initials: "AR",
    bgColor: "bg-primary"
  },
  {
    id: 2,
    content: "La mejor inversión para mi negocio. El proceso fue rápido y profesional. Ya estamos viendo un aumento en nuestras consultas gracias a la nueva página.",
    author: "Miguel Vázquez",
    role: "Clínica Dental",
    rating: 5,
    initials: "MV",
    bgColor: "bg-orange-500"
  },
  {
    id: 3,
    content: "Precio justo y resultado profesional. Lo que más me gustó fue la claridad en el proceso y el cumplimiento de los plazos. Sin duda volveré a trabajar con ellos.",
    author: "Laura Castillo",
    role: "Boutique de Moda",
    rating: 4.5,
    initials: "LC",
    bgColor: "bg-emerald-500"
  }
];

export default function Testimonials() {
  // Helper to render the stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
    }
    
    return stars;
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Testimonios de empresas que confiaron en nosotros para su presencia web.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardContent className="p-8">
                <div className="flex text-yellow-400 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="italic mb-6 text-gray-600">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center text-white font-bold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
