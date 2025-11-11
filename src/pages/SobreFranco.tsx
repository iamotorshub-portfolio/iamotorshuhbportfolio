import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Trophy, Briefcase, TrendingUp, Calendar, CheckCircle, Quote } from "lucide-react";
import { FloatingText } from "@/components/ui/floating-text";
import { ShimmerText } from "@/components/ui/text-reveal";
import francoProfile from "@/assets/franco-profile-pro.jpg";
const SobreFranco = () => {
  return <>
      <Helmet>
        <title>Sobre Franco Larrarte | CEO IA MotorsHub</title>
        <meta name="description" content="10+ años experiencia ventas + marketing + tecnología. Ex Director Creativo para Nike, Adidas. Top 5 Vendedor Toyota Argentina." />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary-light to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <FloatingText>
                <div>
                  <Badge className="mb-4 bg-white/10 text-white border-white/20">
                    Sobre Franco
                  </Badge>
                  <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                    De Director Creativo Global a{" "}
                    <ShimmerText text="Pionero en IA" className="text-5xl md:text-6xl font-black" />
                  </h1>
                  <p className="text-xl text-white/80 mb-8 text-justify">Transformo ideas imposibles en resultados inevitables.</p>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                    <a href="https://calendly.com/franco-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      Agendar Consulta con Franco
                    </a>
                  </Button>
                </div>
              </FloatingText>
              <FloatingText delay={200}>
                <div className="relative group">
                  <img src={francoProfile} alt="Franco Larrarte - CEO IA MotorsHub" className="rounded-2xl shadow-2xl w-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </FloatingText>
            </div>
          </div>
        </section>

        {/* Credentials */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <FloatingText>
              <h2 className="text-4xl font-black text-center mb-12">
                Credenciales y <ShimmerText text="Logros" className="text-4xl font-black" />
              </h2>
            </FloatingText>
            <div className="grid md:grid-cols-4 gap-8">
              {[{
              icon: Award,
              number: "10+",
              label: "Años Experiencia",
              description: "Ventas + Marketing + Tech"
            }, {
              icon: Trophy,
              number: "Top 5",
              label: "Vendedor Nacional",
              description: "Toyota Argentina, 5 años"
            }, {
              icon: Briefcase,
              number: "Fortune 500",
              label: "Marcas Globales",
              description: "Nike, Adidas, Evian"
            }, {
              icon: TrendingUp,
              number: "170+",
              label: "Leads Generados",
              description: "Primer mes de cliente"
            }].map((item, i) => <div key={i} className="text-center p-6 bg-card border border-border rounded-xl">
                  <div className="inline-flex p-4 bg-primary/10 rounded-lg mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-black text-primary mb-2">
                    {item.number}
                  </div>
                  <div className="font-bold mb-2">{item.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <FloatingText>
              <h2 className="text-4xl font-black text-center mb-12">
                Mi <ShimmerText text="Trayectoria" className="text-4xl font-black" />
              </h2>
            </FloatingText>
            <div className="max-w-4xl mx-auto space-y-8">
              {[{
              year: "2010-2015",
              title: "Director Creativo Freelance",
              description: "Trabajé con marcas Fortune 500: Nike, Adidas, Evian, Unilever. Aprendí que el marketing sin estrategia es solo ruido bonito.",
              badges: ["Brands Globales", "Publicidad", "Creatividad"]
            }, {
              year: "2018-2023",
              title: "Vendedor Senior - Toyota Autos del Sur",
              description: "5 años consecutivos entre los Top 5 vendedores de Argentina. Descubrí que el 80% de las ventas se pierden por falta de seguimiento.",
              badges: ["Top 5 Nacional", "Ventas B2C", "CRM"]
            }, {
              year: "2023-2025",
              title: "Fundador - IA MotorsHub",
              description: "Primera empresa de Latinoamérica enfocada en transformar concesionarias e inmobiliarias con IA. De 0 a 170 leads en 30 días para nuestros clientes.",
              badges: ["Inteligencia Artificial", "Automatización", "Emprendimiento"]
            }].map((item, i) => <div key={i} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-24 flex-shrink-0">
                      <div className="font-bold text-primary">{item.year}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.badges.map((badge, j) => <Badge key={j} variant="secondary">{badge}</Badge>)}
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-12 mb-12">
                <Quote className="h-12 w-12 text-primary mb-6" />
                <blockquote className="text-3xl font-bold mb-6 leading-tight">
                  "La mejor tecnología es la que no se nota. 
                  Los clientes solo ven resultados, no algoritmos."
                </blockquote>
                <p className="text-muted-foreground text-xl">— Franco Larrarte</p>
              </div>

              <h3 className="text-3xl font-black mb-8">Mis Principios</h3>
              <div className="space-y-6">
                {[{
                title: "Resultados sobre Tecnología",
                description: "No importa cuán sofisticada sea la IA si no genera ROI medible"
              }, {
                title: "Simplicidad sobre Complejidad",
                description: "Las mejores soluciones son las que cualquiera puede usar"
              }, {
                title: "Acción sobre Perfección",
                description: "Mejor un prototipo funcionando hoy que el sistema perfecto en 6 meses"
              }].map((principle, i) => <div key={i} className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl">
                    <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">{principle.title}</h4>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-6">
              ¿Querés saber si la IA puede escalar tu negocio?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Agendemos una consulta de 30 minutos sin compromiso. 
              Te cuento exactamente qué se puede hacer en tu caso específico.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold" asChild>
              <a href="https://calendly.com/franco-iamotorshub/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta con Franco
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>;
};
export default SobreFranco;