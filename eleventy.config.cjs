// External imports
require("dotenv").config();

// Internal imports

module.exports = function (eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(require("./src/_11ty/plugins/plugins.cjs"));

	// Filters
	eleventyConfig.addPlugin(require("./src/_11ty/filters/filters.cjs"));

	// Shortcodes
	eleventyConfig.addPlugin(require("./src/_11ty/shortcodes/shortcodes.cjs"));

	// Collections
	const types = ["article", "bookmark"];
	for (const type of types) {
		eleventyConfig.addCollection(type, (collectionApi) =>
			collectionApi.getAll().filter((item) => item.data.type === type)
		);
	}

	// Passthrough copy
	eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

	return {
		templateFormats: ["html", "md", "njk", "webc"],
		markdownTemplateEngine: "njk",
		htmlTemplateEngine: "njk",
		dir: {
			input: "src/input",
			includes: "../_includes", // Relative to input
			data: "../_data", // Relative to input
			output: "_site",
		},
	};
};
