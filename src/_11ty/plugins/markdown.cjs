const anchor = require("markdown-it-anchor");
const container = require("markdown-it-container");
const path = require("path");
const slugify = require("@sindresorhus/slugify");

let markdownLibrary = require("markdown-it")({
	breaks: true,
	html: true,
	linkify: true,
	typographer: true,
})
	.use(container, "aside", {
		render: (tokens, idx) => {
			const title = tokens[idx].info.trim().match(/^aside\s+(.*)$/);
			if (tokens[idx].nesting === 1) {
				return `<aside>
						<strong>${markdownLibrary.render(title[1])}</strong>
						<div>
					`;
			} else {
				return ` </div>
					</aside>
					`;
			}
		},
	})
	.use(container, "details", {
		render: (tokens, idx) => {
			let summary = tokens[idx].info.trim().match(/^details\s+(.*)$/);

			if (tokens[idx].nesting === 1) {
				return `<details><summary>${markdownLibrary.utils.escapeHtml(
					summary[1]
				)}</summary>\n`;
			} else {
				return `</details>\n`;
			}
		},
		validate: (params) => params.trim().match(/^details\s+(.*)$/),
	})
	.use(anchor, {
		level: 2,
		slugify: slugify,
	})
	.use(require("markdown-it-eleventy-img"), {
		globalAttributes: {
			class: "[ image ]",
			decoding: "async",
			loading: "lazy",
			sizes: "(max-width: 768px) 100vw, 768px",
		},
		imgOptions: {
			formats: ["avif", "webp", "auto"],
			outputDir: path.join("_site", "img"),
			urlPath: "/img/",
			widths: ["auto"],
		},
	});

module.exports.plugin = (eleventyConfig) => {
	eleventyConfig.setLibrary("md", markdownLibrary);
};
module.exports.library = markdownLibrary;
