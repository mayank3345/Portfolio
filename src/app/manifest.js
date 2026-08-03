import { siteConfig } from "@/config/siteConfig";

export default function manifest() {
  return {
    name: siteConfig.name,

    short_name: siteConfig.shortName,

    description: siteConfig.description,

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#2563eb",

    icons: [
      {
        src: "/logo/logo.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/logo/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
