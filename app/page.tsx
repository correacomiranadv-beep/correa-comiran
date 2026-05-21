const equipe = [
  {
    nome: "Mariele Correa",
    cargo: "Advogada Previdenciarista",
    descricao: "Especializada em Direitos Previdenciários.",
    oab: "OAB/PR 105.238",
    foto: "/mariele.jpg",
    instagram: "https://www.instagram.com/marielecorreaantonielli/",
    whatsapp: "https://wa.me/5546999417656",
    telefone: "+55 46 99941-7656",
  },
  {
    nome: "Laryssa Brito",
    cargo: "Advogada de Direito Bancário",
    descricao: "Especializada em abusos bancários, RMC, fraudes e descontos indevidos.",
    oab: "OAB/PR 134.858",
    foto: "/laryssa.jpg",
    instagram: "https://www.instagram.com/adv.laryssabrito/",
    whatsapp: "https://wa.me/5546988200648",
    telefone: "+55 46 98820-0648",
  },
  {
    nome: "Jairo Krug",
    cargo: "Advogado Previdenciário",
    descricao: "Atuação em Direito Previdenciário e demandas contra o INSS.",
    oab: "OAB/PR 129.345",
    foto: "/jairo.jpg",
    instagram: "https://www.instagram.com/adv_jairo_krug_junior/",
    whatsapp: "https://wa.me/5546988183704",
    telefone: "+55 46 98818-3704",
  },
  {
    nome: "Francieli Comiran",
    cargo: "Advogada Previdenciária",
    descricao: "Especialista em Direitos Previdenciários.",
    oab: "OAB/PR 101.893",
    foto: "/francieli.jpg",
    instagram: "https://www.instagram.com/fran_comiran/",
    whatsapp: "https://wa.me/5546999342000",
    telefone: "+55 46 99934-2000",
  },
  {
    nome: "Antonio Luis da Costa",
    cargo: "Advogado Cível",
    descricao: "Atuação em Direito Civil, Direito do Consumidor e Sucessões.",
    oab: "OAB/PR 129.284",
    foto: "/antonio.jpg",
    instagram: "https://www.instagram.com/antoniolui_s/",
    whatsapp: "https://wa.me/5545998506623",
    telefone: "+55 45 99850-6623",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#d8c7a3]/40">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/logo.jpg" alt="Correa & Comiran" className="w-16 h-16 object-contain" />

            <div>
              <h1 className="text-2xl font-serif font-bold">Correa & Comiran</h1>
              <p className="text-xs tracking-[0.25em] uppercase text-[#8b6f3d]">
                Advogados Associados
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#equipe" className="hover:text-[#8d1420]">Equipe</a>
            <a href="#areas" className="hover:text-[#8d1420]">Áreas</a>
            <a href="#contato" className="hover:text-[#8d1420]">Contato</a>
          </nav>

          <a
            href="https://wa.me/554699342000"
            target="_blank"
            className="bg-[#8d1420] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-black transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Imagem fundo */}
  <div className="absolute inset-0">
    <img
      src="/escritorio.jpg"
      alt="Equipe Correa & Comiran"
      className="w-full h-full object-cover opacity-90"
    />

    {/* Fade branco vindo de baixo */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf7] via-[#fbfaf7]/55 to-transparent" />

    {/* Camada suave */}
    <div className="absolute inset-0 bg-white/10" />
  </div>

  {/* Conteúdo */}
  <div className="relative z-10 text-center px-6 pt-20">
    <p className="uppercase tracking-[0.35em] text-[#b3873d] font-bold mb-6">
      Correa & Comiran
    </p>

    <h2 className="text-6xl md:text-8xl font-serif font-bold leading-tight text-[#1d1d1d]">
      Advocacia estratégica,
      <span className="block text-[#7c0f1c]">
        humana e eficiente
      </span>
    </h2>

    <div className="w-40 h-[2px] bg-[#b3873d] mx-auto my-10" />

    <p className="max-w-4xl mx-auto text-2xl text-neutral-700 leading-relaxed">
      Escritório especializado em soluções jurídicas modernas, com atuação em
      Direito Previdenciário, Bancário, Civil, Consumidor e Sucessões.
    </p>
  </div>
</section>

      <section id="equipe" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
              Nossa equipe
            </p>

            <h3 className="text-5xl md:text-6xl font-serif font-bold mb-5">
              Conheça nossa equipe
            </h3>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-24 h-[2px] bg-[#b28b4a]" />
              <div className="w-3 h-3 rotate-45 bg-[#b28b4a]" />
              <div className="w-24 h-[2px] bg-[#b28b4a]" />
            </div>

            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Profissionais comprometidos em oferecer atendimento jurídico de excelência,
              com estratégia, segurança e proximidade.
            </p>
          </div>

          <div className="space-y-20">
            {equipe.map((pessoa, index) => (
              <div
                key={pessoa.nome}
                className={`grid lg:grid-cols-2 bg-white rounded-[28px] overflow-hidden shadow-2xl border border-neutral-200 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="h-[650px] bg-neutral-100">
                  <img
                    src={pessoa.foto}
                    alt={pessoa.nome}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <h4 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    {pessoa.nome}
                  </h4>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-28 h-[2px] bg-[#b28b4a]" />
                    <div className="w-3 h-3 rotate-45 bg-[#b28b4a]" />
                    <div className="w-28 h-[2px] bg-[#b28b4a]" />
                  </div>

                  <p className="text-[#8d1420] uppercase tracking-[0.18em] font-black mb-8">
                    {pessoa.cargo}
                  </p>

                  <div className="space-y-6 text-lg text-neutral-700 mb-8">
                    <div className="flex gap-4 items-start">
                      <span className="w-11 h-11 rounded-full bg-[#f6f1e8] border border-[#d8c7a3] flex items-center justify-center text-[#9b7a3f]">
                        ⚖
                      </span>
                      <p>{pessoa.descricao}</p>
                    </div>

                    <div className="border-t border-neutral-200 pt-6 flex gap-4 items-center">
                      <span className="w-11 h-11 rounded-full bg-[#f6f1e8] border border-[#d8c7a3] flex items-center justify-center text-[#9b7a3f]">
                        §
                      </span>
                      <p className="font-semibold">{pessoa.oab}</p>
                    </div>
                  </div>

                  <div className="bg-[#f7f5f0] rounded-3xl p-8 mb-8 border border-neutral-200">
                    <p className="text-[#8d1420] text-4xl font-serif mb-2">“</p>
                    <p className="text-neutral-700 text-lg leading-relaxed">
                      Atuação jurídica com responsabilidade, técnica e compromisso com os
                      direitos de cada cliente.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={pessoa.instagram}
                      target="_blank"
                      className="bg-[#8d1420] text-white px-7 py-4 rounded-xl font-bold shadow-lg hover:bg-[#6d0f18] transition"
                    >
                      Ver Instagram
                    </a>

                    <a
                      href={pessoa.whatsapp}
                      target="_blank"
                      className="bg-[#1f1f1f] text-[#d6aa55] px-7 py-4 rounded-xl font-bold shadow-lg hover:bg-black transition"
                    >
                      Falar no WhatsApp
                    </a>
                  </div>

                  <p className="mt-6 text-[#9b7a3f] font-semibold">
                    WhatsApp: {pessoa.telefone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="py-24 bg-[#fbfaf7]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
            Especialidades
          </p>

          <h3 className="text-5xl font-serif font-bold mb-14">
            Áreas de atuação
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Direito Previdenciário",
              "Direito Bancário",
              "Direito Civil",
              "Direito do Consumidor",
            ].map((area) => (
              <div
                key={area}
                className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
              >
                <div className="w-14 h-14 rounded-full bg-[#8d1420] mx-auto mb-5" />
                <h4 className="font-bold text-xl">{area}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 bg-[#8d1420] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-5xl font-serif font-bold mb-6">
            Precisa de orientação jurídica?
          </h3>

          <p className="text-xl text-white/80 mb-10">
            Fale com nossa equipe e receba atendimento profissional.
          </p>

          <a
            href="https://wa.me/554699342000"
            target="_blank"
            className="bg-white text-[#8d1420] px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-black hover:text-[#d6aa55] transition"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <footer className="py-10 bg-white border-t border-neutral-200 text-center">
        <p className="font-serif text-2xl font-bold mb-2">
          Correa & Comiran Advogados Associados
        </p>
        <p className="text-neutral-500">
          © 2026 Correa & Comiran — Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
