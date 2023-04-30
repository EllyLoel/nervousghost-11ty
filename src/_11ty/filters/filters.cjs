/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = (eleventyConfig) => {
	eleventyConfig.addFilter("limit", require("./limit.cjs"));
	eleventyConfig.addFilter("unique", require("./unique.cjs"));
	eleventyConfig.addFilter("readableDate", require("./readableDate.cjs"));
	eleventyConfig.addFilter("htmlDateString", require("./htmlDateString.cjs"));
	eleventyConfig.addFilter("getAllTags", require("./getAllTags.cjs"));
	eleventyConfig.addFilter("filterTagList", require("./filterTagList.cjs"));
	eleventyConfig.addFilter("excerpt", require("./excerpt.cjs"));
	eleventyConfig.addFilter(
		"addNonBreakingSpace",
		require("./addNonBreakingSpace.cjs")
	);
	eleventyConfig.addFilter("newUrl", require("./newUrl.cjs"));
	eleventyConfig.addFilter("markdown", require("./markdown.cjs"));
};
