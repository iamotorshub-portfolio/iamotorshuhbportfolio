import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import web1 from "@/assets/portfolio/web-1.jpg";
import web2 from "@/assets/portfolio/web-2.jpg";
import web3 from "@/assets/portfolio/web-3.jpg";
import web4 from "@/assets/portfolio/web-4.jpg";
import web5 from "@/assets/portfolio/web-5.jpg";
import web6 from "@/assets/portfolio/web-6.jpg";
import web7 from "@/assets/portfolio/web-7.jpg";
import web8 from "@/assets/portfolio/web-8.jpg";
import web9 from "@/assets/portfolio/web-9.jpg";
import web10 from "@/assets/portfolio/web-10.jpg";
import web11 from "@/assets/portfolio/web-11.jpg";
import web12 from "@/assets/portfolio/web-12.jpg";
import web13 from "@/assets/portfolio/web-13.jpg";
import web14 from "@/assets/portfolio/web-14.jpg";
import web15 from "@/assets/portfolio/web-15.jpg";

const webProjects = [
  {
    title: "E-commerce Premium Moda",
    client: "Fashion Retail",
    description: "Tienda online con carrito inteligente y recomendaciones IA personalizadas",
    image: web1,
    techs: ["React", "Node.js", "Stripe", "MongoDB"]
  },
  {
    title: "Dashboard Analytics SaaS",
    client: "Tech Platform",
    description: "Panel de métricas en tiempo real con visualizaciones interactivas",
    image: web2,
    techs: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"]
  },
  {
    title: "Landing Page Conversión",
    client: "Marketing Agency",
    description: "Landing de alto impacto con formularios inteligentes y A/B testing",
    image: web3,
    techs: ["React", "Tailwind", "Supabase", "Analytics"]
  },
  {
    title: "Portal Inmobiliario",
    client: "Real Estate",
    description: "Plataforma de búsqueda y gestión de propiedades con tours virtuales",
    image: web4,
    techs: ["Next.js", "Mapbox", "Firebase", "WhatsApp API"]
  },
  {
    title: "App de Reservas Restaurante",
    client: "Gastronomía",
    description: "Sistema de reservas online con gestión de mesas y confirmaciones automáticas",
    image: web5,
    techs: ["React", "Node.js", "Stripe", "Twilio"]
  },
  {
    title: "Plataforma Educativa LMS",
    client: "EdTech",
    description: "Sistema de gestión de aprendizaje con clases en vivo y certificados",
    image: web6,
    techs: ["Next.js", "Zoom API", "PostgreSQL", "AWS"]
  },
  {
    title: "Sitio Corporativo B2B",
    client: "Consultoría",
    description: "Web corporativa con CMS personalizado y sección de recursos",
    image: web7,
    techs: ["React", "Strapi", "AWS", "SEO Tools"]
  },
  {
    title: "Marketplace Multi-vendor",
    client: "Retail Tech",
    description: "Plataforma de comercio con múltiples vendedores y sistema de pagos",
    image: web8,
    techs: ["Next.js", "Stripe Connect", "Redis", "PostgreSQL"]
  },
  {
    title: "Landing Generación Leads",
    client: "B2B Services",
    description: "Funnel optimizado con calculadora ROI y chat en vivo",
    image: web9,
    techs: ["React", "Tailwind", "HubSpot", "Intercom"]
  },
  {
    title: "App Fitness & Wellness",
    client: "Health & Fitness",
    description: "Plataforma de entrenamiento personal con planes y seguimiento",
    image: web10,
    techs: ["React", "Firebase", "Stripe", "Video Streaming"]
  },
  {
    title: "Portal Noticias Digital",
    client: "Media",
    description: "Sitio de noticias con CMS headless y suscripciones premium",
    image: web11,
    techs: ["Next.js", "Contentful", "Stripe", "Vercel"]
  },
  {
    title: "E-commerce Alimentación",
    client: "Food Delivery",
    description: "Tienda online con gestión de stock y entregas programadas",
    image: web12,
    techs: ["React", "Node.js", "Stripe", "Google Maps"]
  },
  {
    title: "Landing Evento Corporativo",
    client: "Events",
    description: "Sitio para evento con registro, agenda y networking virtual",
    image: web13,
    techs: ["Next.js", "Zoom", "Mailchimp", "Stripe"]
  },
  {
    title: "Plataforma Reservas Médicas",
    client: "Healthcare",
    description: "Sistema de turnos online con videoconsultas y historias clínicas",
    image: web14,
    techs: ["React", "Twilio Video", "HIPAA", "PostgreSQL"]
  },
  {
    title: "Sitio Arquitectura Premium",
    client: "Architecture Studio",
    description: "Portfolio interactivo con galería 3D y calculadora de proyectos",
    image: web15,
    techs: ["Next.js", "Three.js", "Sanity CMS", "Vercel"]
  }
];

const techLogos: Record<string, string> = {
  "React": "⚛️",
  "Next.js": "▲",
  "Node.js": "📗",
  "TypeScript": "TS",
  "Tailwind": "🎨",
  "Stripe": "💳",
  "MongoDB": "🍃",
  "PostgreSQL": "🐘",
  "Firebase": "🔥",
  "Supabase": "⚡",
  "AWS": "☁️",
  "Vercel": "▲",
  "Mapbox": "🗺️",
  "Analytics": "📊",
  "Recharts": "📈",
  "WhatsApp API": "💬",
  "Twilio": "📞",
  "Zoom API": "🎥",
  "Strapi": "🚀",
  "SEO Tools": "🔍",
  "Redis": "💾",
  "Stripe Connect": "💰",
  "HubSpot": "🎯",
  "Intercom": "💬",
  "Video Streaming": "📹",
  "Contentful": "📝",
  "Google Maps": "🌍",
  "Zoom": "🎥",
  "Mailchimp": "📧",
  "Twilio Video": "🎥",
  "HIPAA": "🔒",
  "Three.js": "🎲",
  "Sanity CMS": "📋"
};

export const WebProjectsCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {webProjects.map((project, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="group relative h-[500px] overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/60" />
              </div>

              {/* Content */}
              <div className="relative flex h-full flex-col justify-between p-6">
                {/* Top Section */}
                <div>
                  <Badge className="mb-3 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                    {project.client}
                  </Badge>
                  <h3 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack - Bottom Section */}
                <div className="space-y-3">
                  <div className="h-px bg-border/50" />
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Stack Tecnológico
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted/80 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:bg-primary/10 hover:border-primary/50"
                        >
                          <span className="text-base">{techLogos[tech] || "⚙️"}</span>
                          <span className="text-xs font-medium text-foreground">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-info/20 to-primary/20 blur-xl" />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};
