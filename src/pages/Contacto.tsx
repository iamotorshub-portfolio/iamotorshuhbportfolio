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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  contactType: z.enum(["call", "meeting"], {
    required_error: "Por favor seleccioná una opción",
  }),
  name: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "El email no puede exceder 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(8, { message: "El teléfono debe tener al menos 8 dígitos" })
    .max(20, { message: "El teléfono no puede exceder 20 caracteres" })
    .regex(/^[+]?[0-9\s()-]+$/, { message: "Formato de teléfono inválido" }),
  company: z.string()
    .trim()
    .max(100, { message: "El nombre de la empresa no puede exceder 100 caracteres" })
    .optional(),
  service: z.string()
    .min(1, { message: "Por favor seleccioná un servicio" }),
  preferredTime: z.string()
    .optional(),
  message: z.string()
    .trim()
    .max(1000, { message: "El mensaje no puede exceder 1000 caracteres" })
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contacto = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      contactType: "meeting",
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      preferredTime: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);

    try {
      const contactTypeText = data.contactType === "call" 
        ? "Solicita que lo llamen" 
        : "Solicita agendar videollamada de 20 min";

      // Encode data for WhatsApp
      const message = encodeURIComponent(
        `*Nueva Consulta - IA MotorsHub*\n\n` +
        `*Tipo de Contacto:* ${contactTypeText}\n` +
        `*Nombre:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Teléfono:* ${data.phone}\n` +
        `*Empresa:* ${data.company || "No especificada"}\n` +
        `*Servicio:* ${data.service}\n` +
        `*Horario Preferido:* ${data.preferredTime || "No especificado"}\n` +
        `*Mensaje:* ${data.message || "Sin mensaje adicional"}`
      );

      // TODO: Integrate with email sending service
      // For now, simulate form submission
      setTimeout(() => {
        toast({
          title: "¡Solicitud enviada!",
          description: data.contactType === "call" 
            ? "Te contactaremos en las próximas 24 horas." 
            : "Revisá tu email para confirmar tu videollamada.",
        });
        setLoading(false);
        form.reset();
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Por favor, intentá nuevamente.",
        variant: "destructive",
      });
      setLoading(false);
    }
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
              Hablemos de tu{" "}
              <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Proyecto
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Elegí cómo querés que te contactemos y descubrí cómo la IA puede transformar tu negocio
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-black mb-6">Elegí tu Modalidad de Contacto</h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Contact Type Selection */}
                    <FormField
                      control={form.control}
                      name="contactType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-bold">¿Cómo preferís que te contactemos?</FormLabel>
                          <FormControl>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <button
                                type="button"
                                onClick={() => field.onChange("call")}
                                className={`p-6 border-2 rounded-xl text-left transition-all hover:border-primary ${
                                  field.value === "call" 
                                    ? "border-primary bg-primary/10" 
                                    : "border-border"
                                }`}
                              >
                                <div className="flex items-start gap-4">
                                  <Phone className="h-8 w-8 text-primary flex-shrink-0" />
                                  <div>
                                    <h3 className="font-bold text-lg mb-2">Quiero que me llamen</h3>
                                    <p className="text-sm text-muted-foreground">
                                      Te contactaremos por teléfono en las próximas 24 horas
                                    </p>
                                  </div>
                                </div>
                              </button>
                              <button
                                type="button"
                                onClick={() => field.onChange("meeting")}
                                className={`p-6 border-2 rounded-xl text-left transition-all hover:border-primary ${
                                  field.value === "meeting" 
                                    ? "border-primary bg-primary/10" 
                                    : "border-border"
                                }`}
                              >
                                <div className="flex items-start gap-4">
                                  <MessageCircle className="h-8 w-8 text-primary flex-shrink-0" />
                                  <div>
                                    <h3 className="font-bold text-lg mb-2">Agendar Videollamada Gratuita</h3>
                                    <p className="text-sm text-muted-foreground">
                                      Videollamada de 20 minutos para despejar dudas
                                    </p>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo *</FormLabel>
                          <FormControl>
                            <Input placeholder="Juan Pérez" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="juan@empresa.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono (WhatsApp) *</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="+54 9 291 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Nombre de tu empresa" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Servicio de Interés *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Seleccioná una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="agent-hub">IA Agent HUB</SelectItem>
                              <SelectItem value="asistentes">Asistentes IA</SelectItem>
                              <SelectItem value="storyboard">Storyboard Studio</SelectItem>
                              <SelectItem value="menu-vivo">Menú Vivo IA</SelectItem>
                              <SelectItem value="probador">Probador Virtual</SelectItem>
                              <SelectItem value="rentals">Rentals AI</SelectItem>
                              <SelectItem value="funnels">Funnels y Webs</SelectItem>
                              <SelectItem value="consulta">Consultoría General</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {form.watch("contactType") === "call" && (
                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Horario Preferido</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccioná un horario" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="morning">Mañana (9-12hs)</SelectItem>
                                <SelectItem value="afternoon">Tarde (14-18hs)</SelectItem>
                                <SelectItem value="evening">Noche (18-20hs)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>¿Qué desafío querés resolver?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Contanos brevemente sobre tu proyecto o desafío..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      disabled={loading}
                    >
                      {loading ? (
                        "Enviando..."
                      ) : form.watch("contactType") === "call" ? (
                        "Solicitar Llamada"
                      ) : (
                        "Agendar Videollamada"
                      )}
                    </Button>
                  </form>
                </Form>
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
