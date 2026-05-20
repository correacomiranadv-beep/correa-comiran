export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="p-6 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold">
              Correa & Comiran
            </h1>

            <p className="text-neutral-400">
              Advocacia & Consultoria Jurídica
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/554699342000"
          className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-semibold"
        >
          WhatsApp
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-32">
        <h2 className="text-6xl font-bold leading-tight mb-8">
          Advocacia estratégica
          <span className="text-yellow-400">
            {" "}para resultados reais
          </span>
        </h2>

        <p className="text-xl text-neutral-300 max-w-3xl leading-relaxed">
          O escritório Correa & Comiran atua com excelência
          em Direito Previdenciário, Trabalhista, Civil e Empresarial,
          oferecendo atendimento jurídico moderno e humanizado.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="https://wa.me/554699342000"
            className="bg-yellow-500 text-black px-6 py-4 rounded-2xl font-semibold"
          >
            Fale com um advogado
          </a>

          <a
            href="#"
            className="border border-neutral-700 px-6 py-4 rounded-2xl"
          >
            Áreas de atuação
          </a>
        </div>
      </section>
    </main>
  )
}