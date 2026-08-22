/*
 * Filename: vite.config.js
 * FullPath: modules/projects/veela.css/vite.config.js
 * Change date and time: 22.15.00_22.08.2026
 * Reason for changes: Sass loadPaths so @use "layers" resolves during npm publish build.
 */
import { resolve } from "node:path";
import { readFile } from "node:fs/promises";
import { defineConfig } from "vite";
import { initiate } from "../../shared/vite.config.js";

export const NAME = "veela";
export const __dirname = resolve(import.meta.dirname, "./");

// WHY: Shared workspace Vite expects HTTPS on :443 — needs elevated ports/certs and breaks
// `npm run dev`/Puppeteer on typical machines. This package overrides to HTTP on VEELA_DEV_PORT.
const VEELA_DEV_PORT = Number(process.env.VEELA_DEV_PORT ?? process.env.PORT ?? "5176");
const VEELA_DEV_HOST = process.env.VEELA_DEV_HOST ?? "127.0.0.1";
const mayOpenBrowser =
    process.env.CI !== "true" && process.env.VEELA_OPEN !== "0";

export default defineConfig(async () => {
    const tsconfig = JSON.parse(await readFile(resolve(__dirname, "./tsconfig.json"), { encoding: "utf8" }));
    const base = initiate(NAME, tsconfig, __dirname);

    // WHY: Shared initiate defaults to ./src/index.ts; Veela's runtime lives under scss/.
    const entry = resolve(__dirname, "./src/scss/index.ts");
    if (base.build?.lib) base.build.lib.entry = entry;
    if (base.build?.rollupOptions) base.build.rollupOptions.input = entry;
    if (base.rollupOptions) base.rollupOptions.input = entry;
    if (base.optimizeDeps) base.optimizeDeps.entries = [entry];

    // WHY: lightningcss warns/fails on CSS `@function` (Veela wavy-step); keep CSS unminified.
    base.build = {
        ...base.build,
        cssMinify: false
    };

    return {
        ...base,
        css: {
            ...base.css,
            preprocessorOptions: {
                ...base.css?.preprocessorOptions,
                scss: {
                    ...base.css?.preprocessorOptions?.scss,
                    /* WHY: `_tokens.scss` uses @use "layers"; file lives at src/scss/_layers.scss. */
                    loadPaths: [
                        resolve(__dirname, "./src/scss"),
                        resolve(__dirname, "./src/scss/core"),
                        ...(base.css?.preprocessorOptions?.scss?.loadPaths || [])
                    ]
                }
            }
        },
        plugins: [...(base?.plugins || [])],
        server: {
            ...(base?.server ?? {}),
            host: VEELA_DEV_HOST,
            port: VEELA_DEV_PORT,
            strictPort: true,
            https: false,
            /** `npm run dev` — opens default browser to the probe page (disable: VEELA_OPEN=0). */
            open: mayOpenBrowser,
            origin: `http://${VEELA_DEV_HOST === "0.0.0.0" ? "127.0.0.1" : VEELA_DEV_HOST}:${VEELA_DEV_PORT}`,
        },
    };
});
