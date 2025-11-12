import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Home } from "lucide-react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    // Generate confetti
    const confettiArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setConfetti(confettiArray);
  }, []);

  return (
    <>
      <Helmet>
        <title>¡Gracias por Contactarnos! | IA MotorsHub</title>
        <meta name="description" content="Tu solicitud ha sido enviada exitosamente. Te contactaremos pronto." />
      </Helmet>

      {/* Confetti Effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="absolute w-3 h-3 animate-fade-in"
            style={{
              left: `${item.left}%`,
              top: "-20px",
              animationDelay: `${item.delay}s`,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              animation: `fall 3s linear ${item.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(720deg);
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-primary to-secondary-light relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px] animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center animate-fade-in">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-success/20 rounded-full blur-2xl animate-pulse" />
                <div className="relative bg-white rounded-full p-6 shadow-2xl">
                  <CheckCircle className="h-20 w-20 text-success animate-scale-in" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
              ¡Mensaje Enviado{" "}
              <span className="bg-white text-primary px-3 py-1 rounded-lg">
                con Éxito!
              </span>
            </h1>

            {/* Message */}
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Gracias por contactarnos. Revisá tu email para más detalles.
              <br />
              Te responderemos en las próximas <span className="font-bold text-white">24 horas</span>.
            </p>

            {/* Info Card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                ¿Querés agendar una videollamada ahora?
              </h2>
              <p className="text-white/80 mb-6">
                Podés agendar tu consulta gratuita de 30 minutos directamente en nuestro calendario.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-bold shadow-xl"
                asChild
              >
                <a href="https://calendly.com/contacto-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Videollamada Gratuita
                </a>
              </Button>
            </div>

            {/* Back to Home */}
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              asChild
            >
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Volver al Inicio
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
