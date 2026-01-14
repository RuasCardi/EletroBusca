import { 
  Monitor, 
  Smartphone, 
  Laptop, 
  Printer, 
  Server, 
  Cable,
  CheckCircle2
} from "lucide-react";

const items = [
  { icon: Laptop, text: "Computadores e notebooks" },
  { icon: Monitor, text: "Monitores e TVs" },
  { icon: Smartphone, text: "Celulares e tablets" },
  { icon: Cable, text: "Cabos, fontes e periféricos" },
  { icon: Printer, text: "Impressoras e scanners" },
  { icon: Server, text: "Servidores e equipamentos de TI" },
];

const WhatWeCollect = () => {
  return (
    <section id="o-que-coletamos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-muted rounded-full text-primary font-semibold mb-4 animate-fade-in">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            O que <span className="text-gradient">coletamos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recolhemos diversos tipos de equipamentos eletrônicos, funcionando ou não, 
            para destinação ambientalmente correta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className="group flex items-center gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl cta-gradient flex items-center justify-center group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{item.text}</h3>
              </div>
              <CheckCircle2 className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
            <span className="text-muted-foreground">E muito mais!</span>
            <span className="text-primary font-semibold">Entre em contato para saber mais</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCollect;
