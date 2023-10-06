import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "MelDocs",
      social: {
        github: "https://github.com/melvinalmonte",
      },
      sidebar: [
        {
          label: "Dev environment setup",
          autogenerate: { directory: "dev" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
