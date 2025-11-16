import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, CheckCircle } from "lucide-react";
export const FinalCTA = () => {
  return <section className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary" />
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para{" "}
            <span className="relative inline-block group">
              <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-extrabold px-3 py-1">
                multiplicar tus Resultados
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400/40 via-purple-400/40 to-pink-400/40 blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
              <span className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg" />
            </span>{" "}
            con IA?
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Agendá una consulta de 30 minutos y descubrí exactamente 
            cómo la IA puede transformar tu negocio
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["Sin compromiso", "Diagnóstico personalizado", "ROI estimado"].map((benefit, i) => <div key={i} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="font-medium">{benefit}</span>
              </div>)}
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-2xl shadow-black/20 text-lg px-8" asChild>
              <a href="https://calendly.com/contacto-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta Gratuita
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};