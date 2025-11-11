import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Film, 
  Utensils, 
  Shirt, 
  Home, 
  Layout, 
  ArrowRight,
  Sparkles,
  TrendingUp,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

// Import service images
import assistentesImg from "@/assets/service-asistentes.jpg";
import storyboardImg from "@/assets/service-storyboard.jpg";
import menuImg from "@/assets/service-menu.jpg";
import probadorImg from "@/assets/service-probador-virtual.jpg";
import rentalsImg from "@/assets/service-rentals-ai.jpg";
import funnelsImg from "@/assets/service-funnels-web.jpg";

const services = [
  {
    id: 1,
    badge: "🔥 Más Popular",
    icon: Bot,
    title: "Asistentes IA Conversacionales",
    tagline: "Tu equipo de ventas que nunca duerme",
    description: "Agentes con voz que atienden clientes 24/7. Agent Hub, WhatsApp bots, recepcionistas virtuales.",
    image: assistentesImg,
    price: "$199",
    priceDetail: "USD/mes",
    stats: [
      { value: "100%", label: "Leads atendidos" },
      { value: "-60%", label: "Trabajo manual" },
      { value: "+40%", label: "Conversión" }
    ],
    link: "/servicios/asistentes-ia",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    badge: "🎬 Alta Demanda",
    icon: Film,
    title: "Storyboard Studio Pro",
    tagline: "Producción cinematográfica con IA",
    description: "Storyboards en 8K con personajes consistentes. Para agencias, productoras y creadores.",
    image: storyboardImg,
    price: "$299",
    priceDetail: "USD/mes",
    stats: [
      { value: "90%", label: "Menos costo" },
      { value: "10x", label: "Más velocidad" },
      { value: "8K", label: "Resolución" }
    ],
    link: "/servicios/storyboard-studio",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 3,
    badge: "🍽️ Gastronomía",
    icon: Utensils,
    title: "Menú Vivo IA",
    tagline: "Tu menú que vende mientras duermes",
    description: "Menús digitales inteligentes con fotos IA fotorrealistas. Para bares, restaurantes, hoteles.",
    image: menuImg,
    price: "$149",
    priceDetail: "USD/mes",
    stats: [
      { value: "3x", label: "Engagement" },
      { value: "$70M", label: "Ventas/año" },
      { value: "24/7", label: "Disponible" }
    ],
    link: "/servicios/menu-vivo",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    badge: "👕 Fashion Tech",
    icon: Shirt,
    title: "Probador Virtual IA",
    tagline: "Pruébatelo antes de comprarlo",
    description: "Try-on virtual para ecommerce de moda. Reduce devoluciones y aumenta conversión.",
    image: probadorImg,
    price: "$249",
    priceDetail: "USD/mes",
    stats: [
      { value: "-40%", label: "Devoluciones" },
      { value: "+80%", label: "Conversión" },
      { value: "AR", label: "Tecnología" }
    ],
    link: "/servicios/probador-virtual",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    id: 5,
    badge: "🏠 Real Estate",
    icon: Home,
    title: "Rentals AI",
    tagline: "Alquila más, trabaja menos",
    description: "Sistema completo de gestión inmobiliaria con IA. CRM + automatización + leads 24/7.",
    image: rentalsImg,
    price: "$349",
    priceDetail: "USD/mes",
    stats: [
      { value: "+220%", label: "Consultas" },
      { value: "-42%", label: "Tiempo trabajo" },
      { value: "170+", label: "Leads/mes" }
    ],
    link: "/servicios/rentals-ai",
    gradient: "from-teal-500/20 to-emerald-500/20"
  },
  {
    id: 6,
    badge: "🚀 Conversión",
    icon: Layout,
    title: "Funnels y Webs",
    tagline: "De visita a cliente en 3 clics",
    description: "Landing pages y funnels optimizados con IA. Diseño, desarrollo y conversión garantizada.",
    image: funnelsImg,
    price: "$599",
    priceDetail: "Proyecto",
    stats: [
      { value: "25%+", label: "Conversión" },
      { value: "7 días", label: "Delivery" },
      { value: "A/B", label: "Testing" }
    ],
    link: "/servicios/funnels-y-web",
    gradient: "from-violet-500/20 to-purple-500/20"
  }
];

export const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentService = services[currentIndex];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-dark to-neutral-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/50 to-transparent" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-info/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="h-4 w-4 mr-2" />
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Soluciones IA que{" "}
            <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Multiplican Resultados
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Precios accesibles desde Argentina para toda Latinoamérica
          </p>
        </div>

        {/* Main carousel card */}
        <div 
          className="max-w-6xl mx-auto mb-12 animate-fade-in"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Card className="overflow-hidden border-white/10 bg-gradient-to-br from-secondary-light/50 to-secondary/50 backdrop-blur-xl shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left: Content */}
              <div className="flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-gradient-to-r from-primary to-info text-white border-0">
                      {currentService.badge}
                    </Badge>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${currentService.gradient} backdrop-blur-sm`}>
                      <currentService.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white">
                    {currentService.title}
                  </h3>

                  <p className="text-lg text-info font-semibold">
                    {currentService.tagline}
                  </p>

                  <p className="text-white/80 text-lg leading-relaxed">
                    {currentService.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {currentService.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="text-2xl font-black text-primary mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/60">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-white">
                      {currentService.price}
                    </span>
                    <span className="text-white/60">
                      {currentService.priceDetail}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-info hover:opacity-90 text-white shadow-lg shadow-primary/50"
                      asChild
                    >
                      <Link to={currentService.link}>
                        Ver Detalles
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                      asChild
                    >
                      <a href="https://calendly.com/contacto-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                        <Clock className="mr-2 h-5 w-5" />
                        Agendar Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-[400px] md:h-full min-h-[400px]">
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentService.gradient} opacity-20`} />
                </div>

                {/* Floating badge */}
                <div className="absolute -top-3 -right-3 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm animate-pulse">
                  <TrendingUp className="inline h-4 w-4 mr-1" />
                  ROI Comprobado
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-8">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex 
                  ? "w-8 h-2 bg-gradient-to-r from-primary to-info" 
                  : "w-2 h-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>

        {/* All services grid preview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-gradient-to-br from-primary/20 to-info/20 border-2 border-primary/50"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
            >
              <service.icon className={`h-8 w-8 mx-auto mb-2 ${
                idx === currentIndex ? "text-primary" : "text-white/60"
              }`} />
              <p className={`text-xs text-center ${
                idx === currentIndex ? "text-white font-semibold" : "text-white/60"
              }`}>
                {service.title.split(" ").slice(0, 2).join(" ")}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
