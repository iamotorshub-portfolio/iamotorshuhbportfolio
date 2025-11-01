import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap, Network, Blocks, ArrowRight } from "lucide-react";
import makeAutomation from "@/assets/make-automation.jpg";

const automationFeatures = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automatización Total",
    description: "CRM, Email, WhatsApp, Redes Sociales, Pagos, Todo Integrado"
  },
  {
    icon: <Network className="h-6 w-6" />,
    title: "5000+ Integraciones",
    description: "Google, Meta, OpenAI, Stripe, Calendly, Shopify, y más"
  },
  {
    icon: <Blocks className="h-6 w-6" />,
    title: "Constructor Make.com Avanzado",
    description: "Escenarios complejos listos con un solo prompt. El más completo del mercado."
  }
];

const industries = [
  "Automotriz",
  "Inmobiliarias", 
  "Restaurantes",
  "E-commerce",
  "Servicios Profesionales",
  "Educación",
  "Salud",
  "Marketing",
  "Turismo",
  "Fintech"
];

export const AutomationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <Badge className="bg-primary/20 text-primary border-primary/40">
              <Zap className="h-3 w-3 mr-2" />
              Automatización Empresarial
            </Badge>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Automatizaciones para{" "}
              <span className="gradient-text">Cualquier Industria</span>
            </h2>

            <p className="text-xl text-white/80">
              Tenemos el constructor de escenarios de <strong>Make.com más completo del mercado</strong>. 
              Con un solo prompt ya te devolvemos el escenario corriendo.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {automationFeatures.map((feature, i) => (
                <div 
                  key={i}
                  className="flex gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex-shrink-0 p-3 bg-primary/20 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-white/70 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div>
              <p className="text-sm font-semibold mb-3 text-white/60">INDUSTRIAS QUE AUTOMATIZAMOS:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry, i) => (
                  <Badge key={i} variant="outline" className="border-white/20 text-white bg-white/5">
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-white text-secondary hover:bg-white/90 shadow-lg"
              asChild
            >
              <a href="/contacto">
                Automatizar Mi Negocio
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img 
                src={makeAutomation}
                alt="Make.com Automation Scenario"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-3 rounded-xl shadow-lg font-black animate-bounce">
              Un Prompt = Listo ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
