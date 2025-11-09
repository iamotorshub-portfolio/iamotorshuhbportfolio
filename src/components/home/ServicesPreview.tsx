import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FloatingText } from "@/components/ui/floating-text";
import { ShimmerText } from "@/components/ui/text-reveal";
import { 
  Bot, 
  Film, 
  Utensils, 
  Shirt, 
  Home, 
  Layout,
  ArrowRight 
} from "lucide-react";
import asistentesImg from "@/assets/service-asistentes.jpg";
import storyboardImg from "@/assets/service-storyboard.jpg";
import menuImg from "@/assets/service-menu.jpg";
import probadorVirtualImg from "@/assets/service-probador-virtual.jpg";
import rentalsAiImg from "@/assets/service-rentals-ai.jpg";
import funnelsWebImg from "@/assets/service-funnels-web.jpg";

const mainServices = [
  {
    badge: "🔥 Más Popular",
    icon: Bot,
    title: "Asistentes IA Conversacionales",
    description: "Agentes con voz que atienden clientes 24/7. Agent Hub, WhatsApp bots, recepcionistas virtuales.",
    metrics: [
      { stat: "100%", label: "Leads atendidos" },
      { stat: "-60%", label: "Trabajo manual" }
    ],
    link: "/servicios/asistentes-ia",
    image: asistentesImg,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    badge: "🎬 Alta Demanda",
    icon: Film,
    title: "Storyboard Studio Pro",
    description: "Storyboards cinematográficos en 8K con personajes consistentes. Para agencias y productoras.",
    metrics: [
      { stat: "90%", label: "Menos costo" },
      { stat: "10x", label: "Más velocidad" }
    ],
    link: "/servicios/storyboard-studio",
    image: storyboardImg,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    badge: "🍽️ Gastronomía",
    icon: Utensils,
    title: "Menú Vivo IA",
    description: "Menús digitales inteligentes con fotos IA fotorrealistas. Para bares, restaurantes, hoteles.",
    metrics: [
      { stat: "3x", label: "Engagement" },
      { stat: "$70M", label: "Ventas/año" }
    ],
    link: "/servicios/menu-vivo",
    image: menuImg,
    gradient: "from-orange-500 to-red-500"
  }
];

const additionalServices = [
  {
    icon: Shirt,
    title: "Probador Virtual IA",
    description: "Try-on virtual para ecommerce de moda",
    link: "/servicios/probador-virtual",
    image: probadorVirtualImg
  },
  {
    icon: Home,
    title: "Rentals AI",
    description: "Sistema completo gestión inmobiliaria",
    link: "/servicios/rentals-ai",
    image: rentalsAiImg
  },
  {
    icon: Layout,
    title: "Funnels y Webs",
    description: "Desarrollo web + funnels de conversión",
    link: "/servicios/funnels-y-web",
    image: funnelsWebImg
  }
];

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FloatingText>
          <div className="text-center mb-16">
            <div className="inline-block text-sm font-semibold text-primary mb-4">
              Nuestros Servicios
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Soluciones IA que{" "}
              <ShimmerText text="Multiplican Resultados" className="text-4xl md:text-5xl font-black" />
            </h2>
          </div>
        </FloatingText>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {mainServices.map((service, index) => (
            <FloatingText key={index} delay={index * 150}>
              <Link 
                to={service.link}
                className="group block h-full"
              >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-foreground">
                      {service.badge}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg mb-4 bg-gradient-to-br ${service.gradient} text-white`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4 pt-4 border-t">
                    {service.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-2xl font-bold text-primary">
                          {metric.stat}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Ver más
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
            </FloatingText>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <Link 
              key={index} 
              to={service.link}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover-lift">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="inline-flex p-3 rounded-lg mb-4 bg-muted group-hover:bg-primary/10 transition-colors">
                    <service.icon className="h-6 w-6 group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm">
                    Más información
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/servicios">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
