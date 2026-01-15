import { CalendarCheck, Truck, Recycle, FileCheck } from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Agendamento",
    description: "Agende a coleta no local e horário que preferir. Atendemos residências e empresas.",
  },
  {
    icon: Truck,
    title: "Coleta Segura",
    description: "Nossa equipe vai até você para recolher os equipamentos com total segurança.",
  },
  {
    icon: Recycle,
    title: "Reciclagem",
    description: "Os materiais são separados e enviados para reciclagem ambientalmente adequada.",
  },
  {
    icon: FileCheck,
    title: "Destino Correto",
    description: "Garantimos que os resíduos eletrônicos tenham a destinação ambiental adequada.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary font-semibold mb-4">
            Processo Simples
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Como <span className="text-gradient">funciona</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e transparente para você descartar seus eletrônicos 
            de forma consciente e sustentável.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary -translate-y-1/2 rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col items-center text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-secondary text-secondary-foreground font-bold flex items-center justify-center text-lg z-20 shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className="relative z-10 w-24 h-24 rounded-2xl cta-gradient flex items-center justify-center mb-6 button-shadow">
                  <step.icon className="w-12 h-12 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="bg-card p-6 rounded-xl border border-border card-shadow h-[170px] flex flex-col justify-center items-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
