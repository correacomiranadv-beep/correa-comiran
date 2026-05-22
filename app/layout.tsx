import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Correa & Comiran Advogados Associados | Advocacia em Realeza e Santo Antônio do Sudoeste",

  description:
    "Escritório de advocacia especializado em Direito Previdenciário, Bancário, Civil e do Consumidor. Atendimento jurídico em Realeza e Santo Antônio do Sudoeste - PR.",

  keywords: [
    "advogado em realeza",
    "advogado previdenciário",
    "advogado INSS",
    "BPC LOAS",
    "aposentadoria",
    "advogado bancário",
    "fraude bancária",
    "direito do consumidor",
    "advogado santo antonio do sudoeste",
    "advogado civil",
    "correa e comiran",
    "advogado paraná",
    "revisão de aposentadoria",
    "auxílio doença",
    "benefício INSS",
    "direito sucessório",
  ],

  authors: [{ name: "Correa & Comiran Advogados" }],

  creator: "Correa & Comiran Advogados",

  publisher: "Correa & Comiran Advogados",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Correa & Comiran Advogados Associados",

    description:
      "Atendimento jurídico especializado em Direito Previdenciário, Bancário, Civil e Consumidor.",

    url: "https://SEUDOMINIO.com.br",

    siteName: "Correa & Comiran",

    locale: "pt_BR",

    type: "website",
  },

  metadataBase: new URL("https://SEUDOMINIO.com.br"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}