// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Elanor-ExBdlt",
      cssVariable: "--font-Elanor",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Elanor-bold.otf"],
            weight: "bold",
            style: "oblique",
          },
          
        ],
      },
    },
    {
      provider: fontProviders.fontsource(),
      name: "Inder",
      cssVariable: "--font-Inder",
    },
  ],
});
