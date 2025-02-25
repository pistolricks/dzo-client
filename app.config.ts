import { defineConfig } from "@solidjs/start/config";
import tailwindcss from '@tailwindcss/vite';
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig({
   server: {
      experimental: {
         websocket: true,
      }
   },
   ssr: false,
   vite: {

      // vite options
      plugins: [
          tailwindcss(),
          solidSvg()
      ],
      server: {
         port: 3000,
      },
      build: {
         target: 'esnext',
      },
   },
}).addRouter({
   name: "ws",
   type: "http",
   handler: "./src/lib/ws.ts",
   target: "server",
   base: "/ws",
});
