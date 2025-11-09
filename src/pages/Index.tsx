import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { AutomationSection } from "@/components/home/AutomationSection";
import { WebPortfolioCarousel } from "@/components/home/WebPortfolioCarousel";
import { TechStack } from "@/components/home/TechStack";
import { MarketingBanner } from "@/components/home/MarketingBanner";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InteractiveMap } from "@/components/home/InteractiveMap";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IA MotorsHub | Automatización IA para Empresas en Latinoamérica</title>
        <meta 
          name="description" 
          content="Asistentes IA, Storyboards Cinematográficos y Automatización para empresas. 170+ leads generados, 25-30% tasa respuesta, ROI hasta 3500%. Bahía Blanca, Argentina." 
        />
        <meta 
          name="keywords" 
          content="inteligencia artificial empresas, automatización IA, asistentes virtuales, chatbots IA, storyboard IA, menu digital IA, agentes conversacionales" 
        />
        <meta property="og:title" content="IA MotorsHub | Automatización IA para Empresas" />
        <meta property="og:description" content="Transformamos empresas en máquinas de ventas con IA" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
      <HeroSection />
      <MarketingBanner />
      <StatsSection />
      <ServicesPreview />
      <AutomationSection />
      <TechStack />
      <WebPortfolioCarousel />
      <PortfolioPreview />
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Experiencias <span className="gradient-text">Interactivas</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Mapas 3D y visualizaciones inmersivas para tu negocio
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>
      <FinalCTA />
      </div>
    </>
  );
};

export default Index;
