const markdown = require("../plugins/markdown.cjs");

module.exports = (value) => {
	return markdown.library.render(value);
};
