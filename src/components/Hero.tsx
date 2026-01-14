import { ArrowDown, Recycle, Truck, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-background wave-clip" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 rounded-full bg-primary-foreground/10 animate-float" />
      <div className="absolute top-40 left-20 w-16 h-16 rounded-full bg-primary-foreground/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 right-1/4 w-12 h-12 rounded-full bg-primary-foreground/10 animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-40">
        {/* Logo */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Recycle className="w-16 h-16 text-primary-foreground" />
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary-foreground" />
              </div>
            </div>
            <div className="text-primary-foreground">
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight">ELETRO</span>
              <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-secondary-foreground/90">BUSCA</span>
            </div>
          </div>
        </div>

        {/* Main headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Coleta, descarte e reciclagem de eletrônicos.
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Tem eletrônicos parados? Nós buscamos e reciclamos para você!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("contato")}
            >
              Agendar Coleta
              <Truck className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="heroOutline"
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection("como-funciona")}
            >
              Como Funciona
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.8s" }}>
          {[
            { icon: Recycle, text: "Descarte Certificado", desc: "Destinação correta e documentada" },
            { icon: Truck, text: "Coleta Gratuita", desc: "Buscamos no seu endereço" },
            { icon: Shield, text: "Dados Seguros", desc: "Destruição segura de dados" },
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20"
            >
              <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground">{item.text}</h3>
                <p className="text-sm text-primary-foreground/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
