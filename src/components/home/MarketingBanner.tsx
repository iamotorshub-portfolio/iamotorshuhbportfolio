import { Zap, TrendingUp, Target, Rocket } from "lucide-react";
import { ShimmerText } from "@/components/ui/text-reveal";
import { FloatingText } from "@/components/ui/floating-text";

export const MarketingBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-primary via-info to-primary bg-[length:200%_auto] animate-gradient">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FloatingText>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                <ShimmerText 
                  text="Resultados que Hablan por Sí Solos" 
                  className="text-3xl md:text-5xl font-black text-white"
                />
              </h2>
              <p className="text-xl text-white/90">
                No son promesas. Son datos reales de clientes reales.
              </p>
            </div>
          </FloatingText>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                number: "170+",
                label: "Leads en 30 Días",
                description: "Sin gastar en ads"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                number: "1400%",
                label: "ROI Comprobado",
                description: "Primer mes"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                number: "90%",
                label: "Tiempo Ahorrado",
                description: "En tareas manuales"
              },
              {
                icon: <Rocket className="h-8 w-8" />,
                number: "+220%",
                label: "Aumento Ventas",
                description: "Resultados reales"
              }
            ].map((stat, i) => (
              <FloatingText key={i} delay={i * 100}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="inline-flex p-3 bg-white/10 rounded-lg mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-white/70">{stat.description}</div>
                </div>
              </FloatingText>
            ))}
          </div>

          <FloatingText delay={400}>
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white font-bold">
                <Zap className="h-5 w-5 animate-pulse" />
                <span>Casos verificados • Métricas reales • ROI garantizado</span>
              </div>
            </div>
          </FloatingText>
        </div>
      </div>
    </section>
  );
};
