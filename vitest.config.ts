/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // Simula um navegador
    setupFiles: "setupTests.ts", // Arquivo de configuração inicial
    include: ["src/**/*.test.{ts,tsx}"], // Apenas arquivos de teste
  },
});
