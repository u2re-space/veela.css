/**
 * Veela CSS - Advanced Runtime Loader
 *
 * Loads the opt-in Veela theme effects bundle.
 *
 * @example
 * ```ts
 * import { loadAdvancedStyles } from "@fest-lib/veela";
 * await loadAdvancedStyles();
 * ```
 */

import { loadAsAdopted } from "@fest-lib/dom";

import advancedStyles from "../theme/index.scss?inline";

/**
 * Load advanced veela styles
 */
export async function loadAdvancedStyles(): Promise<void> {
    try {
        if (advancedStyles) {
            await loadAsAdopted(advancedStyles);
            console.log("[Veela/Advanced] Advanced styles loaded");
        }
    } catch (e) {
        console.warn("[Veela/Advanced] Failed to load advanced styles:", e);
    }
}

// Re-export core utilities
export * from "../basic/index";

export default loadAdvancedStyles;
