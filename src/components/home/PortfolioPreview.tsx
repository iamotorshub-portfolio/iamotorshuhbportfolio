import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, ArrowRight } from "lucide-react";
import caseFord from "@/assets/case-ford.jpg";

const cases = [
  {
    category: "Automotriz",
    title: "De 25 a 80 Consultas Mensuales",
    client: "Concesionario Ford Bahía Blanca",
    image: caseFord,
    results: [
      { metric: "+220%", label: "Consultas" },
      { metric: "+150%", label: "Ventas" },
      { metric: "100%", label: "Leads atendidos" }
    ],
    testimonial: {
      quote: "El asistente IA responde sobre modelos, agenda test drives automáticamente. Ahorramos 5 horas diarias.",
      author: "Gerente General",
      company: "Ford Bahía Blanca"
    },
    tags: ["Agent Hub", "WhatsApp IA", "CRM"],
    slug: "ford-bahia-blanca"
  },
  {
    category: "Inmobiliaria",
    title: "170 Leads en 30 Días Sin Ads",
    client: "Inmobiliaria Centro",
    image: caseFord,
    results: [
      { metric: "170", label: "Leads capturados" },
      { metric: "25%", label: "Tasa respuesta" },
      { metric: "+133%", label: "Facturación" }
    ],
    testimonial: {
      quote: "Antes perdíamos leads de noche. Ahora la IA responde al instante. Triplicamos consultas en 3 meses.",
      author: "Directora",
      company: "Inmobiliaria Centro"
    },
    tags: ["Rentals AI", "Automatización", "CRM"],
    slug: "inmobiliaria-centro"
  },
  {
    category: "Marketing",
    title: "90% Menos Tiempo en Reportes",
    client: "Agencia Digital México",
    image: caseFord,
    results: [
      { metric: "90%", label: "Menos tiempo" },
      { metric: "$800", label: "Ahorro USD/mes" },
      { metric: "0", label: "Errores" }
    ],
    testimonial: {
      quote: "El dashboard automatizado fue un cambio radical. Nos enfocamos en estrategia, no en Excel.",
      author: "CEO",
      company: "Agencia Premium"
    },
    tags: ["Dashboard", "APIs", "BigQuery"],
    slug: "agencia-digital-mexico"
  }
];

export const PortfolioPreview = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm font-semibold text-primary mb-4">
            Casos de Éxito
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Resultados{" "}
            <span className="gradient-text">Reales y Medibles</span>
          </h2>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover-lift"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge>{caseStudy.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {caseStudy.client}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b">
                  {caseStudy.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl font-bold text-primary">
                        {result.metric}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="mb-4">
                  <Quote className="h-4 w-4 text-primary mb-2" />
                  <p className="text-sm text-muted-foreground italic mb-2">
                    "{caseStudy.testimonial.quote}"
                  </p>
                  <div className="text-xs font-medium">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {caseStudy.testimonial.company}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Link */}
                <Link 
                  to={`/portfolio/${caseStudy.slug}`}
                  className="flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
                >
                  Ver caso completo
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild>
            <Link to="/portfolio">
              Ver Todos los Casos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
