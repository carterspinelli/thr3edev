import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "¿Cómo funciona exactamente el proceso de 3 días?",
    answer: "El proceso comienza con una reunión inicial de 30 minutos para entender tu negocio y necesidades. Inmediatamente después, diseñamos y desarrollamos tu landing page utilizando las mejores tecnologías disponibles. Al tercer día, entregamos el sitio completamente funcional junto con el código fuente."
  },
  {
    id: "faq-2",
    question: "¿Qué incluye exactamente el precio de $18,000 MXN?",
    answer: "El precio fijo incluye diseño personalizado, desarrollo completo, optimización para dispositivos móviles, formulario de contacto funcional, SEO básico, hospedaje por un año, entrega del código fuente completo y 1 mes de soporte técnico. No hay costos ocultos ni cargos adicionales."
  },
  {
    id: "faq-3",
    question: "¿Qué necesitan de mi parte para comenzar?",
    answer: "Para comenzar solo necesitamos 30 minutos de tu tiempo para la reunión inicial, información básica sobre tu negocio, cualquier preferencia de diseño, y tus contenidos (textos, logotipo e imágenes). También un anticipo del 50% del precio total."
  },
  {
    id: "faq-4",
    question: "¿Por qué entregan el código fuente completo?",
    answer: "Creemos en la transparencia y en darte control total sobre tu sitio web. Al entregar el código fuente, garantizamos que puedas modificarlo en el futuro con tu propio equipo técnico si así lo deseas, o seguir trabajando con nosotros para actualizaciones y mejoras."
  }s."
  },
  {
    id: "faq-5",
    question: "¿Ofrecen servicios de hosting y dominio?",
    answer: "Sí, el primer año de hosting está incluido en el precio. Después del primer año, ofrecemos planes de hosting a precios competitivos. En cuanto al dominio, podemos adquirirlo por ti (costo adicional) o puedes utilizar uno que ya poseas."
  }
];

export default function Faq() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre nuestro servicio.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
