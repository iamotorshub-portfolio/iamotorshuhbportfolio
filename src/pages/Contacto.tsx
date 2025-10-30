import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contacto = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaremos en las próximas 24 horas.",
      });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Agendar Consulta Gratuita | IA MotorsHub</title>
        <meta 
          name="description" 
          content="Consulta de 30 minutos sin compromiso. Descubrí cómo la IA puede 10x tu negocio. WhatsApp: +54 9 291 520-6692" 
        />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              Contacto
            </Badge>
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Agendar Consulta{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Gratuita
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              En 30 minutos descubriremos si la IA puede 10x tu negocio
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-black mb-6">Dejanos tus Datos</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono (WhatsApp) *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" />
                  </div>
                  <div>
                    <Label htmlFor="service">Servicio de Interés *</Label>
                    <select 
                      id="service"
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Seleccioná una opción</option>
                      <option value="asistentes">Asistentes IA</option>
                      <option value="storyboard">Storyboard Studio</option>
                      <option value="menu-vivo">Menú Vivo IA</option>
                      <option value="probador">Probador Virtual</option>
                      <option value="rentals">Rentals AI</option>
                      <option value="funnels">Funnels y Webs</option>
                      <option value="consulta">Consultoría General</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="message">¿Qué desafío querés resolver?</Label>
                    <Textarea id="message" rows={4} />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Enviando..." : "Enviar Solicitud"}
                  </Button>
                </form>
              </div>

              {/* Calendly & Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black mb-6">O agendá directamente aquí:</h2>
                  <div className="bg-card border border-border rounded-xl p-8 text-center">
                    <p className="text-muted-foreground mb-6">
                      Elegí día y hora que más te convenga
                    </p>
                    <Button size="lg" className="w-full mb-4" asChild>
                      <a 
                        href="https://calendly.com/franco-iamotorshub/30min" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Abrir Calendly
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Duración: 30 minutos | Video llamada
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-2xl font-black mb-6">Información de Contacto</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:contacto@iamotorshub.com"
                      className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover-lift"
                    >
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold">Email</div>
                        <div className="text-sm text-muted-foreground">
                          contacto@iamotorshub.com
                        </div>
                      </div>
                    </a>

                    <a 
                      href="https://wa.me/5492915206692"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover-lift"
                    >
                      <div className="p-3 bg-success/10 rounded-lg">
                        <Phone className="h-6 w-6 text-success" />
                      </div>
                      <div>
                        <div className="font-bold">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">
                          +54 9 291 520-6692
                        </div>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl">
                      <div className="p-3 bg-muted rounded-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="font-bold">Ubicación</div>
                        <div className="text-sm text-muted-foreground">
                          Bahía Blanca, Buenos Aires, Argentina
                        </div>
                      </div>
                    </div>

                    <a 
                      href="https://iamotorshub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover-lift"
                    >
                      <div className="p-3 bg-info/10 rounded-lg">
                        <Globe className="h-6 w-6 text-info" />
                      </div>
                      <div>
                        <div className="font-bold">Website</div>
                        <div className="text-sm text-muted-foreground">
                          www.iamotorshub.com
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Seguinos en Redes</h3>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/iamotorshub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-card border border-border rounded-xl hover-lift"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/iamotorshub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-card border border-border rounded-xl hover-lift"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a 
                      href="https://wa.me/5492915206692"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-card border border-border rounded-xl hover-lift"
                    >
                      <MessageCircle className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacto;
