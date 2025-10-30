import { Target, TrendingUp, Rocket, Award } from "lucide-react";

const stats = [
  {
    icon: Target,
    number: "170+",
    label: "Leads Generados",
    description: "Para clientes en 30 días",
  },
  {
    icon: TrendingUp,
    number: "25-30%",
    label: "Tasa de Respuesta",
    description: "En campañas automatizadas",
    highlight: true,
  },
  {
    icon: Rocket,
    number: "3500%",
    label: "ROI Proyectado",
    description: "En 60 días",
  },
  {
    icon: Award,
    number: "10+",
    label: "Años Experiencia",
    description: "Ventas + Marketing + Tech",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl border ${
                stat.highlight
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border"
              } hover-lift`}
            >
              <div className={`inline-flex p-3 rounded-lg mb-4 ${
                stat.highlight ? "bg-primary/10" : "bg-muted"
              }`}>
                <stat.icon className={`h-6 w-6 ${
                  stat.highlight ? "text-primary" : "text-foreground"
                }`} />
              </div>
              <div className={`text-4xl font-black mb-2 ${
                stat.highlight ? "text-primary" : "text-foreground"
              }`}>
                {stat.number}
              </div>
              <div className="font-bold text-lg mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
