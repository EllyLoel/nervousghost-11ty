// External imports
const pluginFavicons = require("eleventy-plugin-gen-favicons");
const { EleventyHtmlBasePlugin: pluginHtmlBase } = require("@11ty/eleventy");
const pluginNavigation = require("@11ty/eleventy-navigation");
const pluginPostCss = require("eleventy-plugin-postcss");
const pluginRollup = require("eleventy-plugin-rollup");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginWebC = require("@11ty/eleventy-plugin-webc");

// Internal imports
// const metadata = require("../../_data/metadata.json");

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
	// External plugins
	eleventyConfig.addPlugin(pluginFavicons, { generateManifest: false });
	eleventyConfig.addPlugin(pluginHtmlBase);
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(pluginPostCss);
	eleventyConfig.addPlugin(pluginRollup, {
		rollupOptions: "rollup.config.js",
		scriptGenerator: (file) =>
			`<script src="${file}" type="module" defer></script>`,
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(pluginWebC, {
		components: "src/_includes/components/**/*.webc",
	});

	// Internal plugins
	eleventyConfig.addPlugin(require("./drafts.cjs"));
	eleventyConfig.addPlugin(require("./image.cjs"));
	eleventyConfig.addPlugin(require("./markdown.cjs").plugin);
};
