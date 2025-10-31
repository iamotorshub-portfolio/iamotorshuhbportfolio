import { Helmet } from "react-helmet";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, MessageCircle } from "lucide-react";

const Servicios = () => {
  return (
    <>
      <Helmet>
        <title>Servicios IA | Asistentes, Storyboards, Automatización | IA MotorsHub</title>
        <meta 
          name="description" 
          content="Asistentes IA 24/7, Storyboard Studio Pro, Menú Vivo, Probador Virtual, Rentals AI, Funnels y Webs. Soluciones personalizadas para tu industria. Precios desde $149 USD/mes." 
        />
        <meta property="og:title" content="Servicios IA | IA MotorsHub" />
        <meta property="og:description" content="Soluciones de inteligencia artificial para empresas. Desde $149 USD/mes." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-secondary-dark via-secondary to-secondary-light">
        {/* Hero with Carousel */}
        <ServicesCarousel />

        {/* Features section */}
        <section className="py-20 bg-gradient-to-b from-secondary-light to-neutral-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                  ¿Por Qué Elegir <span className="gradient-text">IA MotorsHub</span>?
                </h2>
                <p className="text-xl text-white/70">
                  Precios accesibles desde Bahía Blanca, Argentina, para toda Latinoamérica
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Precios Accesibles",
                    description: "Precios en dólares pensados para el mercado latinoamericano. Sin letra chica ni sorpresas."
                  },
                  {
                    title: "Implementación Rápida",
                    description: "De la consulta al resultado en 10-14 días. Prototipo funcional en la primera semana."
                  },
                  {
                    title: "Soporte en Español",
                    description: "Equipo 100% hispanohablante. Entendemos tu negocio y tu mercado."
                  },
                  {
                    title: "ROI Comprobado",
                    description: "Casos reales con resultados medibles: +220% consultas, +150% ventas, ROI hasta 1400%."
                  },
                  {
                    title: "Sin Permanencia",
                    description: "Cancela cuando quieras. Garantía de satisfacción de 30 días."
                  },
                  {
                    title: "Tecnología de Punta",
                    description: "OpenAI GPT-4, Anthropic Claude, ElevenLabs y las mejores herramientas del mercado."
                  }
                ].map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-info/20" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                ¿Listo para <span className="gradient-text">10x</span> tus Resultados?
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Agendá una consulta de 30 minutos y descubrí exactamente cómo la IA puede transformar tu negocio
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-info hover:opacity-90 text-white shadow-lg shadow-primary/50"
                  asChild
                >
                  <a href="https://calendly.com/franco-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                    <Calendar className="mr-2 h-5 w-5" />
                    Agendar Consulta Gratuita
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="https://wa.me/5492915206692" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Diagnóstico personalizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>ROI estimado</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Servicios;
