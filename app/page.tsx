export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#120909] to-black" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#5c0f17]/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo.jpg"
              alt="Correa & Comiran"
              className="w-16 h-16 object-contain"
            />

            <div>
              <h1 className="text-2xl font-bold tracking-wide text-white">
                Correa & Comiran
              </h1>

              <p className="text-sm text-neutral-400 tracking-[0.2em] uppercase">
                Advocacia & Consultoria Jurídica
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#areas" className="hover:text-yellow-400 transition">
              Áreas de Atuação
            </a>

            <a href="#sobre" className="hover:text-yellow-400 transition">
              Sobre
            </a>

            <a href="#contato" className="hover:text-yellow-400 transition">
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/554699342000"
            target="_blank"
            className="bg-gradient-to-r from-[#7b101b] to-yellow-500 text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:scale-105 transition"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center py-24">
          <div>
            <div className="inline-flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 px-4 py-2 rounded-full text-sm mb-8">
              Excelência jurídica • Atendimento estratégico
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Defesa jurídica
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#8d1420] via-white to-yellow-400">
                com autoridade
              </span>
              e resultados.
            </h2>

            <p className="text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10">
              O escritório Correa & Comiran atua com excelência em Direito Previdenciário,
              Trabalhista, Civil e Empresarial, oferecendo soluções jurídicas modernas,
              estratégicas e humanizadas.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="https://wa.me/554699342000"
                target="_blank"
                className="bg-gradient-to-r from-[#7b101b] to-yellow-500 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition"
              >
                Falar com um advogado
              </a>

              <a
                href="#areas"
                className="border border-white/20 px-8 py-5 rounded-2xl text-lg hover:border-yellow-400 hover:text-yellow-400 transition"
              >
                Conheça nossas áreas
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7b101b]/40 to-yellow-500/20 blur-3xl rounded-full" />

            <div className="relative border border-white/10 bg-white/5 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl">
              <img
                src="/logo.jpg"
                alt="Logo Correa & Comiran"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section id="areas" className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Especialidades
            </p>

            <h3 className="text-5xl font-black mb-6">
              Áreas de atuação
            </h3>

            <p className="text-neutral-400 max-w-3xl mx-auto text-lg">
              Atendimento jurídico completo para pessoas físicas e empresas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: 'Direito Previdenciário',
                text: 'Aposentadorias, BPC/LOAS, auxílio-doença, revisões e demandas contra o INSS.',
              },
              {
                title: 'Direito Trabalhista',
                text: 'Rescisões, verbas trabalhistas, acidentes de trabalho e defesa do trabalhador.',
              },
              {
                title: 'Direito Civil',
                text: 'Indenizações, contratos, responsabilidade civil e demandas patrimoniais.',
              },
              {
                title: 'Consultoria Empresarial',
                text: 'Assessoria jurídica estratégica para empresas e profissionais.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group border border-white/10 bg-white/5 rounded-[32px] p-8 hover:border-yellow-500/50 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#7b101b] to-yellow-500 mb-6" />

                <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition">
                  {item.title}
                </h4>

                <p className="text-neutral-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-28 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Sobre o escritório
            </p>

            <h3 className="text-5xl font-black mb-8 leading-tight">
              Advocacia moderna,
              <span className="text-[#9e1b28]"> estratégica</span>
              e humana.
            </h3>

            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              A Correa & Comiran oferece atendimento jurídico personalizado,
              com atuação técnica, ética e focada na obtenção de resultados reais.
            </p>

            <p className="text-neutral-400 text-lg leading-relaxed">
              Nossa missão é proporcionar segurança jurídica, confiança e excelência
              em cada processo e atendimento.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#7b101b] to-black border border-white/10 rounded-[32px] p-10">
              <h4 className="text-5xl font-black text-yellow-400 mb-3">+500</h4>
              <p className="text-neutral-300">Clientes atendidos</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
              <h4 className="text-5xl font-black text-yellow-400 mb-3">100%</h4>
              <p className="text-neutral-300">Compromisso profissional</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-10">
              <h4 className="text-5xl font-black text-yellow-400 mb-3">INSS</h4>
              <p className="text-neutral-300">Especialidade previdenciária</p>
            </div>

            <div className="bg-gradient-to-br from-black to-[#7b101b] border border-white/10 rounded-[32px] p-10">
              <h4 className="text-5xl font-black text-yellow-400 mb-3">24h</h4>
              <p className="text-neutral-300">Atendimento digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="border border-yellow-500/20 bg-gradient-to-br from-[#24090d] to-black rounded-[40px] p-14 shadow-2xl">
            <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm mb-4">
              Atendimento imediato
            </p>

            <h3 className="text-5xl font-black leading-tight mb-8">
              Precisa de orientação jurídica?
            </h3>

            <p className="text-xl text-neutral-300 mb-10 max-w-3xl mx-auto">
              Fale diretamente com nossa equipe e receba atendimento jurídico profissional.
            </p>

            <a
              href="https://wa.me/554699342000"
              target="_blank"
              className="inline-flex bg-gradient-to-r from-[#7b101b] to-yellow-500 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:scale-105 transition"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contato"
        className="border-t border-white/10 py-10 text-center text-neutral-500"
      >
        <p className="text-lg font-semibold text-white mb-2">
          Correa & Comiran Advocacia
        </p>

        <p>WhatsApp: +55 46 9934-2000</p>

        <p className="mt-4 text-sm text-neutral-600">
          © 2026 Correa & Comiran — Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}