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
            <p className="text-[#0e62fe] text-sm font-medium mb-2 tracking-wide">NUESTRO EQUIPO</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Obsesionados con la <span className="text-[#0e62fe]">eficiencia</span></h2>
            <p className="text-gray-600 text-lg mb-6">
              No somos una agencia web tradicional. Somos ingenieros de velocidad y calidad. 
              Hemos descompuesto metódicamente el proceso de desarrollo web para eliminar toda ineficiencia.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Creemos que el tiempo de espera es el enemigo de la innovación. Por eso diseñamos un sistema que reduce 
              semanas de trabajo a solo 72 horas, sin comprometer la calidad ni la personalización.
            </p>
            <p className="text-gray-600 text-lg mb-8">
              Nuestro equipo está formado por especialistas en diseño y desarrollo que trabajan en paralelo, 
              no en secuencia. Un enfoque revolucionario para un resultado extraordinario.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#0e62fe] mr-4">
                  <Paintbrush className="h-5 w-5" />
                </div>
                <span className="font-medium">Diseño ejecutivo</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#0e62fe] mr-4">
                  <Code className="h-5 w-5" />
                </div>
                <span className="font-medium">Código perfecto</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#0e62fe] mr-4">
                  <Rocket className="h-5 w-5" />
                </div>
                <span className="font-medium">72h garantizadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-[#0e62fe] mr-4">
                  <Headphones className="h-5 w-5" />
                </div>
                <span className="font-medium">Soporte premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
