const TrustedBy = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-white to-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Empresas que confiam na EletroBusca</h3>
        <p className="mb-6 text-black/70 dark:text-white/70">Parceiros e empresas que já utilizam nossos serviços de coleta e reciclagem.</p>

        <div className="w-full overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .trusted-marquee { 
              display: flex; 
              width: 200%; 
              align-items: center;
              justify-content: center; 
              gap: 6rem;
            }
            .trusted-marquee img { 
              display: flex;
              align-self: center;
            }
            .trusted-marquee .logo-mast { height: 40px; width: auto; object-fit: contain; }
            .trusted-marquee .logo-hagens { height: 192px; width: auto; object-fit: contain; margin-top: 30px; }
            @media (min-width: 768px) {
              .trusted-marquee .logo-mast { height: 60px; }
              .trusted-marquee .logo-hagens { height: 240px; margin-top: 40px; }
              .trusted-marquee { gap: 8rem; }
            }
          `}</style>

          <div className="trusted-marquee" style={{ animation: 'marquee 20s linear infinite' }}>
            <img
              src="/img/image.png"
              alt="Mast Soluções e Tecnologia"
              className="logo-mast"
            />
            <img
              src="/img/hagens-removebg-preview (1).png"
              alt="Hagens"
              className="logo-hagens"
            />
            <img
              src="/img/image.png"
              alt="Mast Soluções e Tecnologia"
              className="logo-mast"
            />
            <img
              src="/img/hagens-removebg-preview (1).png"
              alt="Hagens"
              className="logo-hagens"
            />
            <img
              src="/img/image.png"
              alt="Mast Soluções e Tecnologia"
              className="logo-mast"
            />
            <img
              src="/img/hagens-removebg-preview (1).png"
              alt="Hagens"
              className="logo-hagens"
            />
            <img
              src="/img/image.png"
              alt="Mast Soluções e Tecnologia"
              className="logo-mast"
            />
            <img
              src="/img/hagens-removebg-preview (1).png"
              alt="Hagens"
              className="logo-hagens"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
