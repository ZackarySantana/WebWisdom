import { defineConfig } from 'astro/config';

// https://astro.build/config
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), react(), tailwind(), prefetch({
    selector: "a",
  })],
  output: "server",
  adapter: node({
    mode: "standalone",
  })
});