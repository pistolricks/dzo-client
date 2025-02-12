import {defineConfig} from "@solidjs/start/config";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
   ssr: false,
   middleware: "src/middleware/index.ts",

});
