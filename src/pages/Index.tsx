import { Helmet } from "react-helmet";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { AutomationSection } from "@/components/home/AutomationSection";
import { WebPortfolioCarousel } from "@/components/home/WebPortfolioCarousel";
import { TechStack } from "@/components/home/TechStack";
import { FinalCTA } from "@/components/home/FinalCTA";

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
      <StatsSection />
      <ServicesPreview />
      <AutomationSection />
      <TechStack />
      <WebPortfolioCarousel />
      <PortfolioPreview />
      <FinalCTA />
      </div>
    </>
  );
};

export default Index;
