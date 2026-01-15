import { Recycle, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-bold text-3xl text-background drop-shadow-lg" style={{ fontFamily: 'inherit' }}>
                EletroBusca
              </span>
            </div>
            <p className="text-background/70 mb-4 max-w-sm">
              Soluções completas para coleta, descarte e reciclagem de equipamentos 
              eletrônicos. Cuidando do meio ambiente com responsabilidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-background" />
              </a>
              <a href="https://www.instagram.com/eletrobusca?utm_source=qr&igsh=MXhiN3o2aGVwMWM3Yg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-background" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5 text-background" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-background font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#o-que-coletamos" className="text-background/70 hover:text-primary transition-colors">O que Coletamos</a></li>
              <li><a href="#como-funciona" className="text-background/70 hover:text-primary transition-colors">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-background/70 hover:text-primary transition-colors">Benefícios</a></li>
              <li><a href="#contato" className="text-background/70 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-background font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-background/70">
              <li>(19) 98209-1708</li>
              <li>buscaeletro@gmail.com</li>
              <li>www.eletrobusca.com.br</li>
              <li>Campinas, SP e Região metropolitana de Campinas-SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} EletroBusca. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
