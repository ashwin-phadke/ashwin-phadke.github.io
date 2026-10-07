/// <reference types="vite/client" />

interface Window {
  dataLayer: unknown[];
  gtag: (command: string, ...args: any[]) => void;
}
