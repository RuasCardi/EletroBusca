import { Recycle, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-white text-black dark:bg-black dark:text-white">
      <style>{`
        footer.bg-white { color: #000 !important; }
        @media (prefers-color-scheme: dark) {
          footer.bg-black { color: #fff !important; }
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start text-center md:text-left">
          {/* Logo and description */}
          <div className="flex flex-col h-full justify-center md:justify-start items-center md:items-start">
            <div className="flex flex-col justify-center h-full">
              <div className="flex items-center gap-2 mb-4 mx-auto md:mx-0">
                <Recycle className="w-8 h-8 text-primary drop-shadow-lg" />
                <span className="font-bold text-2xl md:text-3xl text-black dark:text-white drop-shadow-lg" style={{ fontFamily: 'inherit' }}>
                  EletroBusca
                </span>
              </div>
              <p className="mb-4 max-w-sm text-black dark:text-white/80 mx-auto md:mx-0">
                Soluções completas para coleta, descarte e reciclagem de equipamentos 
                eletrônicos. Cuidando do meio ambiente com responsabilidade.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5 text-black dark:text-white" />
                </a>
                <a href="https://www.instagram.com/eletrobusca?utm_source=qr&igsh=MXhiN3o2aGVwMWM3Yg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5 text-black dark:text-white" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5 text-black dark:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-black dark:text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#o-que-coletamos" className="hover:text-primary transition-colors text-black dark:text-white/80">O que Coletamos</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors text-black dark:text-white/80">Como Funciona</a></li>
              <li><a href="#beneficios" className="hover:text-primary transition-colors text-black dark:text-white/80">Benefícios</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors text-black dark:text-white/80">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-black dark:text-white">Contato</h4>
            <ul className="space-y-2 text-black dark:text-white/80">
              <li>(19) 98209-1708</li>
              <li>comercial@eletrobusca.com</li>
              <li>www.eletrobusca.com</li>
              <li>Campinas-SP e Região Metropolitana de Campinas-SP.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/20 pt-8 text-center">
          <p className="text-sm text-black dark:text-white/60">
            © {new Date().getFullYear()} EletroBusca. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
