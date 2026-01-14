import { Leaf, Building2, Users, Award, ShieldCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Meio Ambiente",
    description: "Contribua para um planeta mais limpo. O lixo eletrônico é altamente poluente quando descartado incorretamente.",
  },
  {
    icon: Building2,
    title: "Para Empresas",
    description: "Atendemos empresas de todos os portes com coleta programada e certificação de descarte.",
  },
  {
    icon: Users,
    title: "Para Residências",
    description: "Pessoas físicas também podem agendar coletas gratuitas para seus eletrônicos antigos.",
  },
  {
    icon: Award,
    title: "Certificação",
    description: "Emitimos certificados de descarte correto, essencial para compliance empresarial.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de Dados",
    description: "Destruição segura de HDs e dispositivos de armazenamento com certificação.",
  },
  {
    icon: Clock,
    title: "Agilidade",
    description: "Agendamento flexível e coleta rápida. Respeitamos seu tempo e compromissos.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            Por que escolher a EletroBusca?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais do que coleta, oferecemos uma solução completa e responsável 
            para o descarte de lixo eletrônico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-shadow hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:cta-gradient transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
