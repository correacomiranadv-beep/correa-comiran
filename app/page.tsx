"use client"

import { useState } from "react"

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

const artigos = [
  {
    titulo: "Quem tem direito ao BPC/LOAS?",
    texto: "Entenda os principais requisitos para solicitar o benefício assistencial e quando procurar orientação jurídica.",
  },
  {
    titulo: "Banco descontou valor indevido?",
    texto: "Saiba o que fazer em casos de RMC, empréstimos não contratados, fraudes e cobranças abusivas.",
  },
  {
    titulo: "Revisão de aposentadoria: quando pedir?",
    texto: "Conheça situações em que o segurado pode buscar a revisão do benefício previdenciário.",
  },
]

const perguntas = [
  {
    pergunta: "O escritório atende online?",
    resposta: "Sim. O atendimento pode ser realizado de forma presencial ou online pelo WhatsApp.",
  },
  {
    pergunta: "Vocês atuam em ações contra o INSS?",
    resposta: "Sim. O escritório atua em aposentadorias, BPC/LOAS, auxílio-doença, pensão por morte, revisões e demais benefícios.",
  },
  {
    pergunta: "Atendem casos de descontos bancários indevidos?",
    resposta: "Sim. Atuamos em casos de abusos bancários, RMC, fraudes, empréstimos não contratados e cobranças indevidas.",
  },
  {
    pergunta: "Como faço para solicitar atendimento?",
    resposta: "Você pode preencher o formulário do site ou clicar no botão de WhatsApp para falar diretamente com a equipe.",
  },
]

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <main id="top" className="min-h-screen bg-[#fbfaf7] text-[#1f1f1f]">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-[#d8c7a3]/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4">
            <img src="/logo.jpg" alt="Logo Correa & Comiran" className="w-12 h-12 md:w-16 md:h-16 object-contain" />

            <div>
              <h1 className="text-lg md:text-2xl font-serif font-bold">Correa & Comiran</h1>
              <p className="text-[10px] md:text-xs tracking-[0.18em] md:tracking-[0.25em] uppercase text-[#8b6f3d]">
                Advogados Associados
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-semibold">
            <a href="#equipe" className="hover:text-[#8d1420] transition">Equipe</a>
            <a href="#areas" className="hover:text-[#8d1420] transition">Áreas</a>
            <a href="#blog" className="hover:text-[#8d1420] transition">Blog</a>
            <a href="#faq" className="hover:text-[#8d1420] transition">FAQ</a>
            <a href="#formulario" className="hover:text-[#8d1420] transition">Atendimento</a>
            <a href="#localizacao" className="hover:text-[#8d1420] transition">Localização</a>
          </nav>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="md:hidden bg-[#8d1420] text-white w-11 h-11 rounded-full text-2xl"
          >
            ☰
          </button>

          <a
            href="https://wa.me/554699342000"
            target="_blank"
            className="hidden md:block premium-button bg-[#8d1420] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-black transition"
          >
            WhatsApp
          </a>
        </div>

        {menuAberto && (
          <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 space-y-4 text-center font-bold shadow-xl">
            {[
              ["Equipe", "#equipe"],
              ["Áreas", "#areas"],
              ["Blog", "#blog"],
              ["FAQ", "#faq"],
              ["Atendimento", "#formulario"],
              ["Localização", "#localizacao"],
              ["Contato", "#contato"],
            ].map(([nome, link]) => (
              <a
                key={nome}
                href={link}
                onClick={() => setMenuAberto(false)}
                className="block py-3 rounded-2xl bg-[#fbfaf7] text-[#8d1420]"
              >
                {nome}
              </a>
            ))}

            <a
              href="https://wa.me/554699342000"
              target="_blank"
              className="block py-4 rounded-2xl bg-[#8d1420] text-white"
            >
              Falar no WhatsApp
            </a>
          </div>
        )}
      </header>

      <section className="py-20 md:py-28 text-center bg-[#fbfaf7] px-4">
        <p className="premium-fade uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#9b7a3f] font-bold mb-5 text-sm">
          Correa & Comiran
        </p>

        <h2 className="premium-up text-4xl md:text-7xl font-serif font-bold leading-tight mb-8">
          Advocacia estratégica,
          <span className="block text-[#8d1420]">humana e eficiente</span>
        </h2>

        <div className="gold-line w-32 md:w-40 h-[2px] bg-[#b28b4a] mx-auto mb-8" />

        <p className="premium-fade max-w-4xl mx-auto text-lg md:text-xl text-neutral-600 leading-relaxed">
          Escritório de advocacia especializado em Direito Previdenciário,
          Direito Bancário, Direito Civil e Direito do Consumidor,
          com atendimento profissional em Realeza e Santo Antônio do Sudoeste - PR.
        </p>
      </section>
            <section id="equipe" className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14 md:mb-20">
            <p className="text-[#9b7a3f] uppercase tracking-[0.25em] md:tracking-[0.3em] font-bold mb-4 text-sm">
              Nossa equipe
            </p>

            <h3 className="text-4xl md:text-6xl font-serif font-bold mb-5">
              Conheça nossa equipe
            </h3>

            <p className="text-neutral-600 text-base md:text-lg max-w-3xl mx-auto">
              Profissionais comprometidos em oferecer atendimento jurídico de excelência,
              com estratégia, segurança e proximidade.
            </p>
          </div>

          <div className="space-y-12 md:space-y-20">
            {equipe.map((pessoa, index) => (
              <div
                key={pessoa.nome}
                className={`premium-card grid lg:grid-cols-2 bg-white rounded-[28px] overflow-hidden shadow-2xl border border-neutral-200 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="h-[420px] md:h-[650px] bg-neutral-100">
                  <img src={pessoa.foto} alt={pessoa.nome} className="w-full h-full object-cover" />
                </div>

                <div className="p-7 md:p-16 flex flex-col justify-center">
                  <h4 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                    {pessoa.nome}
                  </h4>

                  <div className="w-28 h-[2px] bg-[#b28b4a] mb-8" />

                  <p className="text-[#8d1420] uppercase tracking-[0.14em] md:tracking-[0.18em] font-black mb-8 text-sm md:text-base">
                    {pessoa.cargo}
                  </p>

                  <div className="space-y-6 text-base md:text-lg text-neutral-700 mb-8">
                    <p>{pessoa.descricao}</p>
                    <p className="font-semibold border-t border-neutral-200 pt-5">{pessoa.oab}</p>
                  </div>

                  <div className="bg-[#f7f5f0] rounded-3xl p-6 md:p-8 mb-8 border border-neutral-200">
                    <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
                      Atuação jurídica com responsabilidade, técnica e compromisso com os direitos de cada cliente.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <a href={pessoa.instagram} target="_blank" className="premium-button bg-[#8d1420] text-white px-7 py-4 rounded-xl font-bold shadow-lg text-center">
                      Instagram
                    </a>

                    <a href={pessoa.whatsapp} target="_blank" className="premium-button bg-[#1f1f1f] text-[#d6aa55] px-7 py-4 rounded-xl font-bold shadow-lg text-center">
                      WhatsApp
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

      {/* BLOG */}
      <section id="blog" className="py-20 md:py-24 bg-[#fbfaf7] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
              Blog Jurídico
            </p>

            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Conteúdos e orientações
            </h3>

            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Informações jurídicas relevantes para orientar e proteger seus direitos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <div
                key={artigo.titulo}
                className="premium-card bg-white rounded-[28px] border border-neutral-200 shadow-xl p-8"
              >
                <p className="text-[#9b7a3f] uppercase tracking-[0.25em] font-bold text-xs mb-4">
                  Artigo Jurídico
                </p>

                <h4 className="text-2xl font-serif font-bold mb-5">
                  {artigo.titulo}
                </h4>

                <p className="text-neutral-600 leading-relaxed">
                  {artigo.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
              FAQ
            </p>

            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Perguntas frequentes
            </h3>

            <p className="text-neutral-600 text-lg">
              Tire dúvidas comuns sobre nossos atendimentos e áreas de atuação.
            </p>
          </div>

          <div className="space-y-6">
            {perguntas.map((item) => (
              <div
                key={item.pergunta}
                className="premium-card bg-[#fbfaf7] border border-neutral-200 rounded-[24px] p-7"
              >
                <h4 className="text-xl font-bold text-[#8d1420] mb-4">
                  {item.pergunta}
                </h4>

                <p className="text-neutral-700 leading-relaxed">
                  {item.resposta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTANTE DO SEU CÓDIGO */}
      {/* Cole aqui o restante do page.tsx que você já tinha:
          ÁREAS
          FORMULÁRIO
          LOCALIZAÇÃO
          CONTATO
          FOOTER
          BOTÕES FLUTUANTES
          STYLE
      */}

    </main>
  )
}