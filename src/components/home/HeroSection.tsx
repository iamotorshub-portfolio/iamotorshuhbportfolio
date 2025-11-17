import { Button } from "@/components/ui/button";
import { Calendar, PlayCircle, Sparkles, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projectFashion from "@/assets/portfolio/project-fashion.jpg";
import projectFunnel from "@/assets/portfolio/project-funnel.jpg";
import projectLeadgen from "@/assets/portfolio/project-leadgen.jpg";
import projectRealestate from "@/assets/portfolio/project-realestate.jpg";
import projectRestaurant from "@/assets/portfolio/project-restaurant.jpg";
import projectStoryboard from "@/assets/portfolio/project-storyboard.jpg";

const portfolioImages = [projectFashion, projectFunnel, projectLeadgen, projectRealestate, projectRestaurant, projectStoryboard];

export const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % portfolioImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary-light to-secondary py-8 md:py-12">
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px] animate-pulse" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-info/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="w-full relative z-10">
        {/* Badge - Full Width */}
        <div className="text-center mb-6 animate-fade-in px-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 animate-pulse-ring">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Transformación Digital con IA</span>
          </div>
        </div>

        {/* Headline - Full Width in 2 Lines */}
        <div className="text-center mb-8 animate-fade-in px-4" style={{ animationDelay: '200ms' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-white max-w-7xl mx-auto">
            Transformamos Empresas en{" "}
            <span className="bg-gradient-to-r from-primary via-info to-primary bg-clip-text text-transparent animate-pulse">
              Máquinas de Ventas
            </span>{" "}
            con Inteligencia Artificial
          </h1>
        </div>

        {/* Portfolio Carousel Banner - Full Width */}
        <div className="mb-8 animate-fade-in w-full" style={{ animationDelay: '400ms' }}>
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              {
                name: "autoplay",
                init: (embla) => {
                  const play = () => {
                    if (embla.canScrollNext()) {
                      embla.scrollNext();
                    } else {
                      embla.scrollTo(0);
                    }
                  };
                  const autoplay = setInterval(play, 4000);
                  embla.on("destroy", () => clearInterval(autoplay));
                  embla.on("pointerDown", () => clearInterval(autoplay));
                },
              },
            ]}
          >
            <CarouselContent className="-ml-0">
              {portfolioImages.map((image, index) => (
                <CarouselItem key={index} className="pl-0">
                  <div className="relative w-full" style={{ aspectRatio: '21/9' }}>
                    <img
                      src={image}
                      alt={`Proyecto ${index + 1}`}
                      className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-white/20" />
            <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-white/20" />
          </Carousel>
        </div>

        {/* Content Below Banner - Horizontal Layout */}
        <div className="max-w-6xl mx-auto space-y-6 px-4">
          {/* Subheadline */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium">
              Asistentes IA, Storyboards Cinematográficos, Automatización y Apps Personalizadas 
              para Empresas de Latinoamérica
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '800ms' }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white shadow-lg shadow-primary/50 w-full sm:w-auto animate-pulse"
              asChild
            >
              <a href="https://calendly.com/contacto-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/90 text-secondary hover:bg-white border-2 border-white shadow-lg w-full sm:w-auto"
              asChild
            >
              <a href="#portfolio">
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Casos de Éxito
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            {[
              { label: "170+ Leads Generados" },
              { label: "25-30% Tasa Respuesta" },
              { label: "ROI hasta 3500%" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="flex items-center space-x-2 text-white/90 hover:scale-110 transition-transform duration-300"
              >
                <CheckCircle className="h-5 w-5 text-success animate-pulse" />
                <span className="text-sm md:text-base font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
