import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Globe, Zap, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import webPortfolio1 from "@/assets/web-portfolio-1.jpg";
import webPortfolio2 from "@/assets/web-portfolio-2.jpg";
import webPortfolio3 from "@/assets/web-portfolio-3.jpg";

const portfolioItems = [
  {
    title: "Sitios Web Corporativos",
    image: webPortfolio1,
    description: "Ecommerce, Restaurantes, Corporativos, Real Estate",
    count: "120+",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO"],
    services: ["Diseño UI/UX", "Desarrollo Frontend", "Optimización SEO", "Analytics"]
  },
  {
    title: "Aplicaciones Móviles",
    image: webPortfolio2,
    description: "Fitness, Delivery, Banking, Social Media, Booking",
    count: "85+",
    technologies: ["React Native", "Flutter", "Firebase", "Push Notifications"],
    services: ["Diseño UX Mobile", "App Development", "Backend APIs", "App Store Deploy"]
  },
  {
    title: "Landing Pages de Conversión",
    image: webPortfolio3,
    description: "SaaS, Productos, Webinars, Lead Magnets, Eventos",
    count: "150+",
    technologies: ["React", "Framer Motion", "Conversion Tracking", "A/B Testing"],
    services: ["Copywriting", "Diseño Persuasivo", "Funnels", "Marketing Automation"]
  }
];

export const WebPortfolioCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress * 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const currentItem = portfolioItems[currentIndex];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">
            <Globe className="h-3 w-3 mr-2" />
            Portfolio de Desarrollo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Más de <span className="gradient-text">300 Proyectos</span> Desarrollados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sitios web, apps móviles y landing pages para todo tipo de industrias. 
            Cada proyecto diseñado para máxima conversión y experiencia de usuario.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Count Badge */}
                <div className="absolute top-6 right-6 bg-primary text-white px-6 py-3 rounded-xl shadow-lg font-black text-2xl">
                  {currentItem.count}
                </div>
              </div>

              {/* Navigation */}
              <div className="absolute inset-0 flex items-center justify-between px-4">
                <Button
                  size="icon"
                  onClick={goToPrevious}
                  className="bg-white/90 hover:bg-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  onClick={goToNext}
                  className="bg-white/90 hover:bg-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-fade-in">
              <div>
                <h3 className="text-3xl font-black mb-3">{currentItem.title}</h3>
                <p className="text-lg text-muted-foreground">{currentItem.description}</p>
              </div>

              {/* Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="font-bold">Tecnologías</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentItem.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Palette className="h-5 w-5 text-info" />
                  <span className="font-bold">Servicios Incluidos</span>
                </div>
                <ul className="grid grid-cols-2 gap-3">
                  {currentItem.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-black text-primary">100%</div>
                  <div className="text-xs text-muted-foreground">Responsive</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-black text-success">90+</div>
                  <div className="text-xs text-muted-foreground">Lighthouse</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-xl">
                  <div className="text-2xl font-black text-info">&lt;2s</div>
                  <div className="text-xs text-muted-foreground">Load Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
                aria-label={`Ir a portfolio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
