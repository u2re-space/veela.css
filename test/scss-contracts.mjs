#!/usr/bin/env node
/**
 * Curated SCSS surface contract for the Veela major-style migration.
 *
 * The test keeps package exports, Sass resolution, and cascade registration
 * aligned so internal tree cleanup cannot silently reintroduce legacy paths.
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync, realpathSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import * as sass from "sass";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const scssRoot = join(root, "src/scss");
const packageJson = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const flUiRoot = resolve(root, "../fl.ui");
const flUiPackageJson = JSON.parse(readFileSync(join(flUiRoot, "package.json"), "utf8"));

const publicEntrypoints = {
    "./scss": "./src/scss/index.scss",
    "./scss/core": "./src/scss/core/index.scss",
    "./scss/basic": "./src/scss/basic/index.scss",
    "./scss/interact": "./src/scss/interact/index.scss",
    "./scss/ui": "./src/scss/ui/index.scss",
    "./scss/theme": "./src/scss/theme/index.scss",
    "./scss/native-controls": "./src/scss/ui/native-controls.scss",
};

const componentEntrypoints = [
    "ui/components/window.scss",
    "ui/components/navbar.scss",
    "ui/components/taskbar.scss",
    "ui/components/task.scss",
    "ui/components/app-menu.scss",
    "ui/components/calendar/index.scss",
    "ui/components/calendar/flyout.scss",
    "ui/components/quick-settings.scss",
    "ui/components/statusbar.scss",
    "ui/components/appearance-desktop.scss",
    "ui/components/appearance-mobile.scss",
    "ui/components/scrollframe.scss",
    "ui/components/slider.scss",
    "ui/components/text.scss",
    "ui/components/file-manager.scss",
    "ui/components/file-manager-content.scss",
    "ui/components/explorer-settings.scss",
    "ui/components/speed-dial.scss",
];

const retiredComponentSheets = [
    "ui/components/calendar/fe-calendar.scss",
    "ui/components/calendar/_arrow.scss",
    "ui/components/calendar/_button.scss",
    "ui/components/calendar/_container.scss",
    "ui/components/calendar/_header.scss",
    "ui/components/calendar/_host.scss",
    "ui/components/calendar/_others.scss",
    "ui/components/calendar/_wrapper.scss",
];

const layerPrelude =
    /@layer\s+tokens\s*,\s*base\s*,\s*layout\s*,\s*components\s*,\s*utilities\s*,\s*theme\s*,\s*overrides\s*,\s*print\s*;/g;
const legacySassPath = /@(use|forward|import)\s+["'][^"']*(?:^|\/)(?:runtime|lib|misc)(?:\/|["'])/;
const registeredLayers = new Set([
    "tokens",
    "base",
    "layout",
    "components",
    "utilities",
    "theme",
    "overrides",
    "print",
]);

function exportTarget(value) {
    return typeof value === "string" ? value : value?.import ?? value?.default;
}

function scssFiles(directory) {
    return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) return scssFiles(path);
        return path.endsWith(".scss") ? [path] : [];
    });
}

const veelaSourceImporter = {
    findFileUrl(url) {
        if (url !== "veela-lib" && !url.startsWith("veela-lib/")) return null;
        const relativePath = url === "veela-lib" ? "index" : url.slice("veela-lib/".length);
        const base = join(scssRoot, relativePath);
        const candidates = [
            base,
            `${base}.scss`,
            join(dirname(base), `_${basename(base)}.scss`),
            join(base, "index.scss"),
            join(base, "_index.scss"),
        ];
        const match = candidates.find(existsSync);
        return match ? pathToFileURL(match) : null;
    },
};

assert.equal(
    packageJson.exports["./scss/*"],
    undefined,
    "Veela must expose a curated SCSS API instead of the legacy ./scss/* wildcard",
);

for (const [specifier, target] of Object.entries(publicEntrypoints)) {
    assert.equal(
        exportTarget(packageJson.exports[specifier]),
        target,
        `${specifier} must resolve to its canonical entry-point`,
    );

    const entry = resolve(root, target);
    assert.ok(existsSync(entry), `${specifier} target must exist: ${target}`);
    const compiled = sass.compile(entry, {
        loadPaths: [scssRoot, join(scssRoot, "core")],
        quietDeps: true,
    });
    assert.equal(
        [...compiled.css.matchAll(layerPrelude)].length,
        1,
        `${specifier} must emit the shared layer prelude exactly once`,
    );
}

for (const relativeEntry of componentEntrypoints) {
    const entry = join(scssRoot, relativeEntry);
    assert.ok(existsSync(entry), `component stylesheet must exist: ${relativeEntry}`);
    const compiled = sass.compile(entry, {
        loadPaths: [scssRoot, join(scssRoot, "core")],
        quietDeps: true,
    });
    assert.ok(compiled.css.trim(), `component stylesheet must emit CSS: ${relativeEntry}`);
}

for (const relativePath of retiredComponentSheets) {
    assert.equal(
        existsSync(join(scssRoot, relativePath)),
        false,
        `unused legacy component stylesheet must be removed: ${relativePath}`,
    );
}

const flUiStyleFacades = {
    "./styles": "./src/styles/index.scss",
    "./styles/core": "./src/styles/core.scss",
    "./styles/lib": "./src/styles/lib.scss",
    "./styles/patch-global-native-controls": "./src/styles/native-controls.scss",
};

const retiredFlUiStylePaths = [
    "src/library",
    "src/styles/fonts",
    "src/styles/lib",
    "src/styles/layers.scss",
    "src/styles/patch-global-native-controls.scss",
    "src/styles/runtime",
    "src/styles/ui",
];

const hostStyleSources = [
    "../subsystem/src/boot/boot-menu.scss",
    "../subsystem/src/boot/shells.scss",
    "../subsystem/src/boot/views.scss",
    "../../views/explorer-view/src/index.scss",
    "../../views/markdown-view/src/index.scss",
    "../../views/markdown-view/src/scss/_markdown.scss",
    "../../views/history-view/src/scss/history.scss",
    "../../views/settings-view/src/scss/Settings.scss",
    "../../views/workcenter-view/src/scss/_index.scss",
    "../../views/workcenter-view/src/scss/_base.scss",
    "../../views/workcenter-view/src/scss/_layout.scss",
    "../../views/workcenter-view/src/scss/_conversation.scss",
    "../../views/workcenter-view/src/scss/_attachments.scss",
    "../../views/workcenter-view/src/scss/_header.scss",
    "../../views/workcenter-view/src/scss/_prompts.scss",
    "../../views/workcenter-view/src/scss/_results.scss",
    "../../views/workcenter-view/src/scss/_animations.scss",
    "../../views/workcenter-view/src/scss/_keyframes.scss",
    "../../views/editor-view/src/scss/markdown-editor.scss",
    "../../views/editor-view/src/scss/quill-editor.scss",
    "../../shells/environment-shell/src/scss/root.scss",
    "../../../apps/CWSP-shell/src/frontend/shells/shells.scss",
    "../../../apps/CWSP-crx/src/frontend/shells/shells.scss",
    "../../../apps/CWSP-crx/src/crx/popup/index.scss",
    "../../../apps/CWSP-crx/src/crx/fix.scss",
];

for (const [specifier, target] of Object.entries(flUiStyleFacades)) {
    assert.equal(
        exportTarget(flUiPackageJson.exports[specifier]),
        target,
        `FL.UI ${specifier} must resolve to a thin Veela facade`,
    );
    assert.ok(existsSync(resolve(flUiRoot, target)), `FL.UI facade must exist: ${target}`);
    const compiled = sass.compile(resolve(flUiRoot, target), {
        loadPaths: [scssRoot, join(scssRoot, "core")],
        importers: [new sass.NodePackageImporter(flUiRoot)],
        quietDeps: true,
    });
    assert.ok(compiled.css.trim(), `FL.UI facade must emit CSS: ${specifier}`);
}

for (const relativePath of retiredFlUiStylePaths) {
    assert.equal(
        existsSync(join(flUiRoot, relativePath)),
        false,
        `FL.UI legacy style tree must be removed: ${relativePath}`,
    );
}

const flUiEntrySource = readFileSync(join(flUiRoot, "src/index.ts"), "utf8");
assert.doesNotMatch(
    flUiEntrySource,
    /\bloadInlineStyle\b/,
    "FL.UI must load the global stylesheet through one delivery path",
);

const flUiLoaderSource = readFileSync(join(flUiRoot, "src/styles/index.ts"), "utf8");
assert.match(
    flUiLoaderSource,
    /veela-lib\/ui\/index\.scss\?inline/,
    "FL.UI loader must adopt Veela's canonical UI stylesheet",
);

const flUiStyleFacadeSource = readFileSync(join(flUiRoot, "src/styles/index.scss"), "utf8");
assert.match(
    flUiStyleFacadeSource,
    /@forward\s+"pkg:@fest-lib\/veela\/scss\/ui";/,
    "FL.UI's stylesheet export must delegate to Veela instead of its local ui tree",
);
const packagedFlUiStyles = sass.compileString('@use "pkg:@fest-lib/fl-ui/styles";', {
    importers: [new sass.NodePackageImporter(flUiRoot)],
    quietDeps: true,
});
assert.ok(packagedFlUiStyles.css.trim(), "FL.UI's exported Sass package facade must compile");

for (const file of scssFiles(scssRoot)) {
    const source = readFileSync(file, "utf8");
    assert.equal(
        legacySassPath.test(source),
        false,
        `canonical SCSS must not import a legacy runtime/lib/misc tree: ${file}`,
    );
    assert.doesNotMatch(
        source,
        /@media[^{]*(?:min-inline-size|max-inline-size)/,
        `CSS media queries must use viewport width features, not logical properties: ${file}`,
    );
    assert.doesNotMatch(
        source,
        /^\s*@(?:use|forward)\s+["']veela-lib/m,
        `Veela internals must not import their own package alias: ${file}`,
    );

    for (const match of source.matchAll(/^\s*@layer\s+([a-zA-Z0-9_-]+)/gm)) {
        assert.ok(
            registeredLayers.has(match[1]),
            `canonical SCSS must use a registered layer, got ${match[1]} in ${file}`,
        );
    }
}

const colorModSources = scssFiles(scssRoot).filter((file) =>
    readFileSync(file, "utf8").includes('@#{"function --u2-color-mod'),
);
assert.deepEqual(
    colorModSources,
    [join(scssRoot, "core/_color-mod.scss")],
    "the --u2-color-mod implementation must have one canonical SCSS source",
);

const typedPropertyOwners = new Map();
for (const file of scssFiles(scssRoot)) {
    for (const match of readFileSync(file, "utf8").matchAll(/@property\s+(--[\w-]+)/g)) {
        const owners = typedPropertyOwners.get(match[1]) ?? [];
        owners.push(file);
        typedPropertyOwners.set(match[1], owners);
    }
}
const duplicatedTypedProperties = [...typedPropertyOwners]
    .filter(([, owners]) => owners.length > 1)
    .map(([name]) => name);
assert.deepEqual(
    duplicatedTypedProperties,
    [],
    "each typed CSS property must be registered by one canonical SCSS module",
);

for (const relativePath of hostStyleSources) {
    const file = resolve(root, relativePath);
    assert.ok(existsSync(file), `canonical host stylesheet must exist: ${relativePath}`);
    const source = readFileSync(file, "utf8");
    assert.doesNotMatch(
        source,
        /@media[^{]*(?:min-inline-size|max-inline-size)/,
        `host media queries must use viewport width features, not logical properties: ${file}`,
    );
    assert.equal(
        /^\s*@layer\s+[a-zA-Z0-9_-]+\s*,/m.test(source),
        false,
        `host stylesheet must not declare a competing layer prelude: ${file}`,
    );
    for (const match of source.matchAll(/^\s*@layer\s+([a-zA-Z0-9_-]+)/gm)) {
        assert.ok(
            registeredLayers.has(match[1]),
            `host stylesheet must use a registered layer, got ${match[1]} in ${file}`,
        );
    }
}

const environmentShellRoot = resolve(root, "../../shells/environment-shell/src/scss/root.scss");
const environmentShellSource = readFileSync(environmentShellRoot, "utf8");
assert.match(
    environmentShellSource,
    /^\s*@layer\s+layout\s*\{/m,
    "environment-shell structure must participate in the shared layout layer",
);
assert.match(
    environmentShellSource,
    /^\s*@layer\s+overrides\s*\{/m,
    "environment-shell theme pins must participate in the shared overrides layer",
);

const crxPopupSource = readFileSync(
    resolve(root, "../../../apps/CWSP-crx/src/crx/popup/index.scss"),
    "utf8",
);
assert.match(
    crxPopupSource,
    /@scope\s*\(\s*:root\[data-crx-page="popup"\]\s*\)/,
    "CRX popup styles must remain constrained to their document root",
);

const windowStyleSource = readFileSync(join(scssRoot, "ui/components/window.scss"), "utf8");
const explorerStyleSource = readFileSync(join(scssRoot, "ui/_explorer.scss"), "utf8");
const speedDialStyleSource = readFileSync(join(scssRoot, "ui/components/speed-dial.scss"), "utf8");
assert.match(windowStyleSource, /container-name:\s*ui-window/, "window styles must name their container");
assert.match(explorerStyleSource, /container-name:\s*ui-file-manager/, "explorer styles must name their container");
assert.match(speedDialStyleSource, /container-name:\s*speed-dial/, "launcher styles must name their container");
assert.match(
    speedDialStyleSource,
    /@container\s+speed-dial\s+\(inline-size\s*<\s*48rem\)/,
    "launcher layout must use its named container for local breakpoints",
);

const homeStyleProjection = resolve(root, "../../views/home-view/src/scss");
assert.ok(existsSync(homeStyleProjection), "home-view must retain a live SCSS projection");
assert.equal(
    realpathSync(homeStyleProjection),
    realpathSync(join(scssRoot, "ui")),
    "home-view SCSS projection must resolve directly to canonical Veela UI styles",
);

const hostScssEntrypoints = [
    "../../shells/environment-shell/src/scss/main.scss",
    "../../views/explorer-view/src/index.scss",
    "../../views/markdown-view/src/index.scss",
    "../../views/workcenter-view/src/scss/_index.scss",
    "../../views/editor-view/src/scss/markdown-editor.scss",
    "../../../apps/CWSP-shell/src/frontend/shells/shells.scss",
    "../../../apps/CWSP-crx/src/crx/popup/index.scss",
];
for (const relativePath of hostScssEntrypoints) {
    const compiled = sass.compile(resolve(root, relativePath), {
        importers: [veelaSourceImporter],
        quietDeps: true,
    });
    assert.ok(compiled.css.trim(), `canonical host stylesheet must compile: ${relativePath}`);
}

console.log("scss contracts passed");
