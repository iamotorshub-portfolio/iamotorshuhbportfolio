import { Button } from "@/components/ui/button";
import { Calendar, PlayCircle, Sparkles, CheckCircle } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary-light to-secondary py-20 md:py-32">
      {/* Animated background mesh */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Transformación Digital con IA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              Transformamos Empresas en{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Máquinas de Ventas
              </span>{" "}
              con Inteligencia Artificial
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/80">
              Asistentes IA, Storyboards Cinematográficos, Automatización y Apps Personalizadas 
              para Empresas de Latinoamérica
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/50"
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
                <a href="#portfolio">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Ver Casos de Éxito
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { label: "170+ Leads Generados" },
                { label: "25-30% Tasa Respuesta" },
                { label: "ROI hasta 3500%" },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-white/90">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10">
              <img 
                src={heroDashboard} 
                alt="AI Dashboard" 
                className="w-full h-auto"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
              +220% Ventas
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
              ROI 1400%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
