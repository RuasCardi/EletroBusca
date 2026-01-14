import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-background wave-bottom" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-primary-foreground/10 animate-float" />
      <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-primary-foreground/10 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 container mx-auto px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Tem eletrônicos parados?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Entre em contato e agende sua coleta gratuita. Nós buscamos e reciclamos para você!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="tel:+5519982091708"
              className="flex items-center justify-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
            >
              <Phone className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">(19) 98209-1708</span>
            </a>
            <a 
              href="mailto:cardinalliruas@gmail.com"
              className="flex items-center justify-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
            >
              <Mail className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">cardinalliruas@gmail.com</span>
            </a>
            <div className="flex items-center justify-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20">
              <MapPin className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground font-semibold">Campinas, SP e Região metropolitana de Campinas-SP</span>
            </div>
          </div>

          <a
            href="https://wa.me/5519982091708?text=Olá!%20Gostaria%20de%20agendar%20uma%20coleta%20de%20eletrônicos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-lg px-10 py-7 animate-fade-in bg-white text-primary font-bold rounded-xl shadow transition hover:bg-primary hover:text-white"
            style={{ animationDelay: "0.6s" }}
          >
            Agendar Coleta Agora
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
