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
    texto:
      "O BPC/LOAS é um benefício assistencial destinado a idosos e pessoas com deficiência que comprovem situação de vulnerabilidade social. A análise correta dos documentos pode fazer diferença no resultado do pedido.",
  },
  {
    titulo: "Descontos bancários indevidos: o que fazer?",
    texto:
      "Em casos de RMC, empréstimos não contratados, fraudes ou cobranças abusivas, é possível buscar a suspensão dos descontos e a reparação dos prejuízos sofridos.",
  },
  {
    titulo: "Quando pedir revisão de aposentadoria?",
    texto:
      "A revisão pode ser indicada quando há erro no cálculo, vínculos não considerados, contribuições ignoradas ou possibilidade de melhorar o valor do benefício.",
  },
]

const perguntas = [
  {
    pergunta: "O escritório atende online?",
    resposta:
      "Sim. O atendimento pode ser realizado de forma presencial ou online, com orientação inicial pelo WhatsApp e acompanhamento conforme a necessidade do caso.",
  },
  {
    pergunta: "Vocês atuam em ações contra o INSS?",
    resposta:
      "Sim. Atuamos em aposentadorias, BPC/LOAS, auxílio-doença, pensão por morte, revisões e demais benefícios previdenciários.",
  },
  {
    pergunta: "Atendem casos de descontos bancários indevidos?",
    resposta:
      "Sim. O escritório atua em casos de abusos bancários, RMC, fraudes, empréstimos não contratados, cobranças indevidas e descontos não autorizados.",
  },
  {
    pergunta: "Como faço para solicitar atendimento?",
    resposta:
      "Você pode preencher o formulário do site ou clicar no botão de WhatsApp para falar diretamente com a equipe.",
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
            <a href="#contato" className="hover:text-[#8d1420] transition">Contato</a>
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

      {/* BLOG JURÍDICO */}
      <section id="blog" className="py-20 md:py-24 bg-[#fbfaf7] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14 md:mb-16">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
              Blog Jurídico
            </p>

            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Conteúdos e orientações
            </h3>

            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Informações jurídicas para orientar clientes sobre seus direitos em temas previdenciários, bancários, civis e consumeristas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <article
                key={artigo.titulo}
                className="premium-card bg-white rounded-[28px] border border-neutral-200 shadow-xl p-8"
              >
                <p className="text-[#9b7a3f] uppercase tracking-[0.25em] font-bold text-xs mb-4">
                  Artigo Jurídico
                </p>

                <h4 className="text-2xl font-serif font-bold mb-5 text-[#8d1420]">
                  {artigo.titulo}
                </h4>

                <p className="text-neutral-600 leading-relaxed">
                  {artigo.texto}
                </p>

                <a
                  href="#formulario"
                  className="inline-block mt-7 text-[#8d1420] font-bold hover:text-[#9b7a3f] transition"
                >
                  Solicitar orientação →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="text-center mb-14 md:mb-16">
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

      <section id="areas" className="py-20 md:py-24 bg-[#fbfaf7]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
            Especialidades
          </p>

          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-12">
            Áreas de atuação
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { nome: "Direito Previdenciário", link: "#direito-previdenciario" },
              { nome: "Direito Bancário", link: "#direito-bancario" },
              { nome: "Direito Civil", link: "#direito-civil" },
              { nome: "Direito do Consumidor", link: "#direito-consumidor" },
            ].map((area) => (
              <a key={area.nome} href={area.link} className="premium-card bg-white border border-neutral-200 rounded-3xl p-8 shadow-lg block">
                <div className="w-14 h-14 rounded-full bg-[#8d1420] mx-auto mb-5" />
                <h4 className="font-bold text-xl">{area.nome}</h4>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">
              Saiba mais
            </p>

            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Entenda nossas áreas de atuação
            </h3>
          </div>

          <div className="space-y-8 md:space-y-10">
            {[
              ["direito-previdenciario", "Direito Previdenciário", "Envolve benefícios do INSS, aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte, salário-maternidade, revisões e ações judiciais previdenciárias."],
              ["direito-bancario", "Direito Bancário", "Atua contra abusos bancários, RMC, empréstimos não contratados, fraudes, descontos indevidos e cobranças abusivas."],
              ["direito-civil", "Direito Civil", "Abrange contratos, indenizações, responsabilidade civil, cobranças, conflitos patrimoniais e relações jurídicas entre particulares."],
              ["direito-consumidor", "Direito do Consumidor", "Protege consumidores contra cobranças indevidas, negativação irregular, produtos defeituosos, contratos abusivos e falhas na prestação de serviços."],
            ].map(([id, titulo, texto]) => (
              <div key={id} id={id} className="premium-card bg-[#fbfaf7] rounded-[32px] p-7 md:p-10 border border-neutral-200 shadow-lg scroll-mt-32">
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-[#8d1420] mb-5">
                  {titulo}
                </h4>
                <p className="text-neutral-700 text-base md:text-lg leading-relaxed">{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formulario" className="py-20 md:py-24 bg-[#fbfaf7] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">Atendimento</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Solicite seu atendimento</h3>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
              Preencha seus dados e nossa equipe entrará em contato pelo WhatsApp.
            </p>
          </div>

          <form
            action="https://formsubmit.co/correacomiranadv@gmail.com"
            method="POST"
            className="premium-card max-w-4xl mx-auto bg-white rounded-[32px] p-6 md:p-12 shadow-2xl border border-neutral-200 space-y-6"
          >
            <input type="hidden" name="_subject" value="Novo atendimento pelo site Correa & Comiran" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="nome" placeholder="Nome completo" required className="w-full bg-[#fbfaf7] border border-neutral-200 rounded-2xl px-5 py-4 outline-none focus:border-[#8d1420]" />
              <input type="tel" name="whatsapp" placeholder="WhatsApp" required className="w-full bg-[#fbfaf7] border border-neutral-200 rounded-2xl px-5 py-4 outline-none focus:border-[#8d1420]" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="email" name="email" placeholder="E-mail" className="w-full bg-[#fbfaf7] border border-neutral-200 rounded-2xl px-5 py-4 outline-none focus:border-[#8d1420]" />
              <select name="area" required className="w-full bg-[#fbfaf7] border border-neutral-200 rounded-2xl px-5 py-4 outline-none focus:border-[#8d1420]">
                <option value="">Área de interesse</option>
                <option>Direito Previdenciário</option>
                <option>Direito Bancário</option>
                <option>Direito Civil</option>
                <option>Direito do Consumidor</option>
                <option>Sucessões</option>
                <option>Outro assunto</option>
              </select>
            </div>

            <textarea name="mensagem" placeholder="Descreva brevemente o seu caso" rows={6} required className="w-full bg-[#fbfaf7] border border-neutral-200 rounded-2xl px-5 py-4 outline-none focus:border-[#8d1420]" />

            <button type="submit" className="premium-button w-full bg-[#8d1420] text-white py-5 rounded-2xl font-black shadow-xl">
              Enviar solicitação
            </button>
          </form>
        </div>
      </section>

      <section id="localizacao" className="py-20 md:py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#9b7a3f] uppercase tracking-[0.3em] font-bold mb-4">Localização</p>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossas unidades</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {[
              ["Unidade Realeza", "Rua Pedro Américo, 3697, Centro Cívico, Realeza - PR", "https://maps.google.com/maps?q=Rua%20Pedro%20Am%C3%A9rico%203697%20Centro%20C%C3%ADvico%20Realeza%20PR&t=&z=16&ie=UTF8&iwloc=&output=embed"],
              ["Unidade Santo Antônio do Sudoeste", "Av. Percy Schreiner, 490, Centro, Santo Antônio do Sudoeste - PR", "https://maps.google.com/maps?q=Avenida%20Percy%20Schreiner%20490%20Centro%20Santo%20Antonio%20do%20Sudoeste%20PR&t=&z=16&ie=UTF8&iwloc=&output=embed"],
            ].map(([titulo, endereco, mapa]) => (
              <div key={titulo} className="premium-card bg-[#fbfaf7] rounded-[32px] overflow-hidden border border-neutral-200 shadow-2xl">
                <div className="p-7 md:p-8">
                  <p className="text-[#9b7a3f] uppercase tracking-[0.22em] font-bold mb-3 text-sm">{titulo}</p>
                  <h4 className="text-3xl font-serif font-bold mb-5">Correa & Comiran</h4>
                  <p className="text-neutral-700 text-lg">{endereco}</p>
                </div>

                <iframe title={titulo} src={mapa} width="100%" height="330" style={{ border: 0 }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 md:py-24 bg-[#8d1420] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Precisa de orientação jurídica?
          </h3>

          <p className="text-lg md:text-xl text-white/80 mb-10">
            Fale com nossa equipe e receba atendimento profissional.
          </p>

          <a href="https://wa.me/554699342000" target="_blank" className="premium-button bg-white text-[#8d1420] px-8 md:px-10 py-5 rounded-2xl font-black shadow-2xl inline-block">
            Entrar em contato
          </a>
        </div>
      </section>

      <footer className="py-10 bg-white border-t border-neutral-200 text-center px-4">
        <p className="font-serif text-2xl font-bold mb-2">Correa & Comiran Advogados Associados</p>
        <p className="text-neutral-500">© 2026 Correa & Comiran — Todos os direitos reservados.</p>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a href="https://wa.me/554699342000" target="_blank" className="premium-button bg-[#8d1420] text-white px-4 md:px-5 py-4 rounded-full shadow-2xl border border-[#d6aa55]/40">
          💬 <span className="hidden md:inline font-bold ml-2">Fale conosco</span>
        </a>

        <a href="#top" className="premium-button w-12 h-12 md:w-14 md:h-14 rounded-full bg-black text-[#d6aa55] shadow-2xl border border-[#d6aa55]/40 flex items-center justify-center text-2xl">
          ↑
        </a>
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .premium-fade { animation: premiumFade 0.9s ease both; }
        .premium-up { animation: premiumUp 0.9s ease both; }
        .premium-card { transition: all 0.35s ease; }
        .premium-card:hover { transform: translateY(-10px); box-shadow: 0 25px 50px rgba(141, 20, 32, 0.18); }
        .premium-button { transition: all 0.3s ease; }
        .premium-button:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 18px 35px rgba(141, 20, 32, 0.25); }
        .gold-line { animation: goldLine 1.2s ease both; }
        @keyframes premiumFade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes premiumUp { from { opacity: 0; transform: translateY(35px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes goldLine { from { width: 0; } to { width: 160px; } }
      `}</style>
    </main>
  )
}