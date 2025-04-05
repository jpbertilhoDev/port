
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      'a700945c-80a2-43d9-a6a1-b05a0a61e830-00-24ojfx0sqgp9r.kirk.replit.dev',
      '.replit.dev',  // Permite qualquer subdomínio do replit.dev
      'localhost'
    ]
  }
});
