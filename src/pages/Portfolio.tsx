import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";
import { AppCarousel } from "@/components/portfolio/AppCarousel";
import caseFord from "@/assets/case-ford.jpg";
import caseInmobiliaria from "@/assets/case-inmobiliaria.jpg";
import caseAgencia from "@/assets/case-agencia.jpg";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import rentalsHero from "@/assets/rentals-ai-hero.jpg";

const cases = [
  {
    category: "Automotriz",
    title: "De 25 a 80 Consultas Mensuales con Asistente IA",
    client: "Concesionario Ford Bahía Blanca",
    image: caseFord,
    appImages: [caseFord, heroDashboard, rentalsHero],
    results: [
      { metric: "+220%", label: "Consultas mensuales" },
      { metric: "+150%", label: "Incremento ventas" },
      { metric: "100%", label: "Leads atendidos" },
      { metric: "6 sem", label: "ROI recuperado" }
    ],
    testimonial: {
      quote: "De 25 consultas/mes a 80. Franco implementó un asistente IA que responde sobre modelos y agenda test drives automáticamente. Ahorramos 5 horas diarias de trabajo manual.",
      author: "Gerente General",
      company: "Concesionario Ford BB"
    },
    tags: ["Agent Hub", "WhatsApp IA", "CRM", "Voice AI"],
    challenge: "Perdían leads fuera de horario y el equipo estaba sobrecargado con consultas repetitivas",
    solution: "Implementamos asistente IA con voz que atiende 24/7, integrado con WhatsApp y sistema de agendamiento",
    timeline: "14 días"
  },
  {
    category: "Inmobiliaria",
    title: "170 Leads en 30 Días Sin Gastar en Publicidad",
    client: "Inmobiliaria Centro - Bahía Blanca",
    image: caseInmobiliaria,
    appImages: [rentalsHero, caseInmobiliaria, heroDashboard],
    results: [
      { metric: "170", label: "Leads capturados" },
      { metric: "25%", label: "Tasa de respuesta" },
      { metric: "+133%", label: "Facturación" },
      { metric: "8", label: "Propiedades vendidas" }
    ],
    testimonial: {
      quote: "Antes perdíamos leads por no contestar de noche. Ahora la IA responde al instante. Triplicamos consultas en 3 meses y vendimos 8 propiedades el primer mes.",
      author: "Directora",
      company: "Inmobiliaria Centro"
    },
    tags: ["Rentals AI", "Automatización", "CRM", "WhatsApp"],
    challenge: "Trabajo manual 60hs/semana, 0 leads digitales, pérdida de oportunidades nocturnas",
    solution: "Sistema Rentals AI completo: CRM automatizado, chatbot calificador 24/7, integración portales",
    timeline: "21 días"
  },
  {
    category: "Marketing Digital",
    title: "90% Reducción en Tiempo de Reportes para Agencia",
    client: "Agencia Digital Premium - México",
    image: caseAgencia,
    appImages: [caseAgencia, heroDashboard, caseFord],
    results: [
      { metric: "90%", label: "Menos tiempo" },
      { metric: "$800", label: "Ahorro USD/mes" },
      { metric: "0", label: "Errores en data" },
      { metric: "24/7", label: "Acceso clientes" }
    ],
    testimonial: {
      quote: "El dashboard automatizado fue un cambio radical. Nuestro equipo ahora se enfoca en estrategia, no en Excel. Los clientes tienen acceso 24/7 a sus métricas.",
      author: "CEO",
      company: "Agencia Digital Premium"
    },
    tags: ["Dashboard", "APIs", "BigQuery", "Automatización"],
    challenge: "20 horas semanales en reportes manuales, errores frecuentes, clientes sin visibilidad",
    solution: "Dashboard automatizado con APIs integradas, actualización en tiempo real, acceso cliente",
    timeline: "10 días"
  }
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Casos de Éxito | 170+ Leads, +220% Ventas | IA MotorsHub</title>
        <meta 
          name="description" 
          content="Casos reales: Concesionarias, Inmobiliarias, Agencias. Resultados medibles con inteligencia artificial. ROI hasta 1400% en 30 días." 
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Resultados{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Reales y Medibles
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Casos de éxito con métricas comprobables. De concesionarias a inmobiliarias, 
              cada proyecto demuestra el poder de la IA aplicada correctamente.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-16">
              {cases.map((caseStudy, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-8 border-b">
                    <div className="flex items-start justify-between mb-4">
                      <Badge>{caseStudy.category}</Badge>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Timeline</div>
                        <div className="font-bold">{caseStudy.timeline}</div>
                      </div>
                    </div>
                    <h2 className="text-3xl font-black mb-2">
                      {caseStudy.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {caseStudy.client}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Carousel or Image */}
                    <div className="relative h-64 md:h-auto p-4 bg-muted/30">
                      {caseStudy.appImages ? (
                        <AppCarousel 
                          images={caseStudy.appImages}
                          title={caseStudy.title}
                        />
                      ) : (
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      {/* Results Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {caseStudy.results.map((result, i) => (
                          <div key={i} className="text-center p-4 bg-muted rounded-lg">
                            <div className="text-3xl font-black text-primary mb-1">
                              {result.metric}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Challenge */}
                      <div className="mb-6">
                        <h3 className="font-bold mb-2 flex items-center">
                          <span className="text-destructive mr-2">❌</span>
                          Desafío
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {caseStudy.challenge}
                        </p>
                      </div>

                      {/* Solution */}
                      <div className="mb-6">
                        <h3 className="font-bold mb-2 flex items-center">
                          <span className="text-success mr-2">✅</span>
                          Solución
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {caseStudy.solution}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {caseStudy.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-muted/50 p-6 rounded-xl">
                        <Quote className="h-6 w-6 text-primary mb-3" />
                        <p className="text-sm italic mb-4">
                          "{caseStudy.testimonial.quote}"
                        </p>
                        <div>
                          <div className="font-bold text-sm">
                            {caseStudy.testimonial.author}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {caseStudy.testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-6">
              ¿Tu Empresa Puede Ser el Próximo Caso de Éxito?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Agendá una consulta de 30 minutos y descubrí exactamente qué resultados 
              podés esperar con IA en tu industria.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-bold"
              asChild
            >
              <a href="https://calendly.com/franco-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
