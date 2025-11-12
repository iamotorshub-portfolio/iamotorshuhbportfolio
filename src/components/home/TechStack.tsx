import { Badge } from "@/components/ui/badge";
import { Cpu, Code, Cloud, Zap } from "lucide-react";

const techCategories = [
  {
    icon: <Cpu className="h-5 w-5" />,
    title: "Inteligencia Artificial",
    color: "text-primary",
    technologies: [
      "OpenAI GPT-4",
      "Anthropic Claude",
      "Google Gemini",
      "ElevenLabs Voice AI",
      "Midjourney",
      "Stable Diffusion"
    ]
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Automatización",
    color: "text-info",
    technologies: [
      "Make.com (Expertos Certificados)",
      "Zapier",
      "n8n",
      "Airtable",
      "WhatsApp Business API",
      "Twilio"
    ]
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Desarrollo",
    color: "text-success",
    technologies: [
      "React / Next.js",
      "TypeScript",
      "Python / FastAPI",
      "Node.js",
      "PostgreSQL",
      "MongoDB"
    ]
  },
  {
    icon: <Cloud className="h-5 w-5" />,
    title: "Cloud & Infraestructura",
    color: "text-warning",
    technologies: [
      "Google Cloud Platform",
      "AWS",
      "Vercel",
      "Railway",
      "Supabase",
      "Firebase"
    ]
  }
];

export const TechStack = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4">
            <Code className="h-3 w-3 mr-2" />
            Stack Tecnológico
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Trabajamos con las{" "}
            <span className="gradient-text">Mejores Herramientas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combinamos tecnologías de punta para crear soluciones robustas, 
            escalables y fáciles de mantener.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {techCategories.map((category, i) => (
            <div 
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover-lift animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={`flex items-center gap-3 mb-6 ${category.color}`}>
                <div className="p-3 bg-gradient-to-br from-primary/10 to-info/10 rounded-xl shadow-lg">
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, j) => {
                  // Determine emoji/logo for each tech
                  const techLogos: Record<string, string> = {
                    "OpenAI GPT-4": "🤖",
                    "Anthropic Claude": "🧠",
                    "Google Gemini": "✨",
                    "ElevenLabs Voice AI": "🎙️",
                    "Midjourney": "🎨",
                    "Stable Diffusion": "🖼️",
                    "Make.com (Expertos Certificados)": "⚡",
                    "Zapier": "⚙️",
                    "n8n": "🔗",
                    "Airtable": "📊",
                    "WhatsApp Business API": "💬",
                    "Twilio": "📱",
                    "React / Next.js": "⚛️",
                    "TypeScript": "📘",
                    "Python / FastAPI": "🐍",
                    "Node.js": "🟢",
                    "PostgreSQL": "🐘",
                    "MongoDB": "🍃",
                    "Google Cloud Platform": "☁️",
                    "AWS": "🟠",
                    "Vercel": "▲",
                    "Railway": "🚂",
                    "Supabase": "⚡",
                    "Firebase": "🔥"
                  };
                  
                  return (
                    <Badge 
                      key={j} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 hover:text-primary hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-1"
                    >
                      <span className="text-sm">{techLogos[tech] || "🔧"}</span>
                      <span>{tech}</span>
                    </Badge>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Make.com Highlight */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-info/10 border border-primary/20 rounded-2xl p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-black mb-3">
            Expertos Certificados en Make.com
          </h3>
          <p className="text-muted-foreground mb-4">
            Somos uno de los pocos equipos en Latinoamérica con certificación avanzada en Make.com. 
            <strong className="text-foreground"> Con un solo prompt creamos escenarios complejos listos para usar.</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge>5000+ Integraciones</Badge>
            <Badge>Escenarios en Minutos</Badge>
            <Badge>Certificación Avanzada</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
