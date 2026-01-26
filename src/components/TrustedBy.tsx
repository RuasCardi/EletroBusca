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
            .trusted-marquee { display: flex; width: 200%; align-items: center; gap: 1.5rem; }
          `}</style>

          <div className="trusted-marquee" style={{ animation: 'marquee 18s linear infinite' }}>
            <img
              src="/img/image.png"
              alt="Empresas que confiam na EletroBusca"
              className="max-w-[160px] md:max-w-[280px] lg:max-w-[420px] h-auto object-contain mx-auto"
            />
            <img
              src="/img/image.png"
              alt="Empresas que confiam na EletroBusca"
              className="max-w-[160px] md:max-w-[280px] lg:max-w-[420px] h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
