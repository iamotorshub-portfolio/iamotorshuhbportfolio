import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Film, 
  Utensils, 
  Shirt, 
  Home, 
  Layout as LayoutIcon,
  ArrowRight,
  Calendar
} from "lucide-react";
import asistentesImg from "@/assets/service-asistentes.jpg";
import storyboardImg from "@/assets/service-storyboard.jpg";
import menuImg from "@/assets/service-menu.jpg";

const services = [
  {
    badge: "🔥 Más Popular",
    icon: Bot,
    title: "Asistentes IA Conversacionales",
    description: "Agentes con voz que atienden clientes 24/7 por teléfono, WhatsApp e Instagram. Agent Hub, chatbots inteligentes y recepcionistas virtuales que califican leads automáticamente.",
    image: asistentesImg,
    features: [
      "Atención 24/7 automatizada",
      "Integración WhatsApp e Instagram",
      "Calificación automática de leads",
      "Voice AI con clonación de voz",
      "Agent Hub personalizado"
    ],
    results: [
      { metric: "100%", label: "Leads atendidos" },
      { metric: "-60%", label: "Trabajo manual" },
      { metric: "+40%", label: "Conversión" }
    ],
    industries: ["Concesionarias", "Inmobiliarias", "Clínicas", "Call Centers"],
    pricing: "Desde $150,000 COP/mes",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    badge: "🎬 Alta Demanda",
    icon: Film,
    title: "Storyboard Studio Pro",
    description: "Generación de storyboards cinematográficos en 8K con personajes consistentes entre frames. Ideal para agencias, productoras audiovisuales y creadores de contenido.",
    image: storyboardImg,
    features: [
      "Generación de escenas en 8K",
      "Personajes consistentes",
      "Edición de composiciones",
      "Múltiples estilos artísticos",
      "Export profesional"
    ],
    results: [
      { metric: "90%", label: "Menos costo" },
      { metric: "10x", label: "Más velocidad" },
      { metric: "8K", label: "Resolución" }
    ],
    industries: ["Agencias", "Productoras", "Creadores de Contenido"],
    pricing: "Por proyecto - Consultar",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    badge: "🍽️ Gastronomía",
    icon: Utensils,
    title: "Menú Vivo IA",
    description: "Menús digitales inteligentes con fotos fotorrealistas generadas por IA. Aumentá engagement y ventas con menús interactivos que se actualizan en tiempo real.",
    image: menuImg,
    features: [
      "Fotos IA fotorrealistas",
      "Menú interactivo responsive",
      "Actualización en tiempo real",
      "Chatbot recomendaciones",
      "Integración delivery"
    ],
    results: [
      { metric: "3x", label: "Engagement" },
      { metric: "$70M", label: "Ventas/año recuperadas" },
      { metric: "24/7", label: "Disponible" }
    ],
    industries: ["Bares", "Restaurantes", "Hoteles", "Eventos"],
    pricing: "Desde $80,000 COP/mes",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Shirt,
    title: "Probador Virtual IA",
    description: "Try-on virtual para ecommerce de moda. Reducí devoluciones y aumentá conversión con prueba virtual de prendas en tiempo real.",
    features: [
      "Prueba virtual en tiempo real",
      "Recomendación de tallas por IA",
      "Integración catálogo existente",
      "Análisis de medidas corporales",
      "Reducción de devoluciones"
    ],
    results: [
      { metric: "-40%", label: "Devoluciones" },
      { metric: "+80%", label: "Conversión" },
      { metric: "100%", label: "Virtual" }
    ],
    industries: ["Ecommerce", "Tiendas Online", "Marcas de Ropa"],
    pricing: "Consultar",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Home,
    title: "Rentals AI",
    description: "Sistema completo de gestión inmobiliaria con IA. CRM automatizado, chatbot calificador 24/7 e integración con portales inmobiliarios.",
    features: [
      "CRM inmobiliario automatizado",
      "Chatbot calificador 24/7",
      "Integración ZonaProp/MercadoLibre",
      "Dashboard métricas en tiempo real",
      "Sistema scoring automático"
    ],
    results: [
      { metric: "+220%", label: "Consultas" },
      { metric: "-42%", label: "Tiempo trabajo" },
      { metric: "+87%", label: "Conversión" }
    ],
    industries: ["Inmobiliarias", "Gestores de Propiedades"],
    pricing: "Desde $200,000 COP/mes",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: LayoutIcon,
    title: "Funnels y Webs",
    description: "Desarrollo web profesional y funnels de conversión optimizados. Landing pages que convierten al 25%+ con diseño premium y automatización completa.",
    features: [
      "Diseño responsive premium",
      "Optimización SEO",
      "Integración CRM",
      "A/B testing",
      "Analytics avanzados"
    ],
    results: [
      { metric: "25%+", label: "Conversión" },
      { metric: "3x", label: "Leads" },
      { metric: "90+", label: "Lighthouse Score" }
    ],
    industries: ["Cualquier Empresa", "Startups", "Corporativos"],
    pricing: "Desde $300,000 COP",
    gradient: "from-indigo-500 to-purple-500"
  }
];

const Servicios = () => {
  return (
    <>
      <Helmet>
        <title>Servicios IA | Asistentes, Storyboards, Automatización | IA MotorsHub</title>
        <meta 
          name="description" 
          content="Asistentes IA 24/7, Storyboard Studio Pro, Menú Vivo, Probador Virtual, Rentals AI, Funnels y Webs. Soluciones personalizadas para tu industria." 
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              Nuestros Servicios
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Soluciones IA a{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Medida
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Transformá tu negocio con inteligencia artificial de última generación. 
              Cada solución está diseñada para generar resultados medibles y escalables.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <a href="https://calendly.com/franco-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </a>
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover-lift"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    {service.image && (
                      <div className="relative h-64 md:h-auto">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
                        {service.badge && (
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/90 text-foreground">
                              {service.badge}
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8">
                      <div className={`inline-flex p-3 rounded-lg mb-4 bg-gradient-to-br ${service.gradient} text-white`}>
                        <service.icon className="h-8 w-8" />
                      </div>

                      <h2 className="text-3xl font-black mb-4">
                        {service.title}
                      </h2>

                      <p className="text-muted-foreground mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-6">
                        <h3 className="font-bold mb-3">Características:</h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-2 text-sm">
                              <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                        {service.results.map((result, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Industries */}
                      <div className="mb-6">
                        <h3 className="font-bold mb-3 text-sm">Para:</h3>
                        <div className="flex flex-wrap gap-2">
                          {service.industries.map((industry, i) => (
                            <Badge key={i} variant="secondary">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Pricing & CTA */}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Inversión</div>
                          <div className="font-bold text-lg">{service.pricing}</div>
                        </div>
                        <Button asChild>
                          <Link to="/contacto">
                            Solicitar Info
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-6">
              ¿No encontrás lo que buscás?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creamos soluciones personalizadas para desafíos únicos. 
              Agendá una consulta y contanos qué necesitás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="https://calendly.com/franco-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacto">
                  Enviar Mensaje
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Servicios;
