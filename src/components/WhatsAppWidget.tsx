import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+5492915206692";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <>
      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-success hover:bg-success/90 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card border border-border rounded-lg px-4 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          <p className="text-sm font-medium">¿Necesitás ayuda?</p>
          <p className="text-xs text-muted-foreground">Chateá con nosotros</p>
        </div>
      </a>
    </>
  );
};
