import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Social-share tags (og:image etc.) must be absolute URLs. On Vercel the
 * production domain is exposed at build time; locally we fall back to "".
 * Override with VITE_SITE_URL (e.g. https://lunujema.org) once you add a domain.
 */
function siteUrl(): Plugin {
  const host = process.env.VITE_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const url = host ? (host.startsWith("http") ? host : `https://${host}`).replace(/\/$/, "") : "";
  return {
    name: "site-url",
    transformIndexHtml: (html) => html.replaceAll("__SITE_URL__", url),
  };
}

export default defineConfig({
  plugins: [react(), siteUrl()],
  server: {
    allowedHosts: ["sb-6cagf25a8lqy.vercel.run"],
  },
});
