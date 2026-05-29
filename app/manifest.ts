import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Correa & Comiran Advogados Associados",
    short_name: "Correa & Comiran",
    description: "Advocacia em Realeza e Santo Antônio do Sudoeste - PR",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#8d1420",

    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}