const groq = require("groq");
const client = require("../_11ty/utils/sanityClient.cjs");
const toMarkdown = require("@sanity/block-content-to-markdown");

function generateImageData({ base, content }) {
	return {
		content: toMarkdown(content),
		date: base.modified || base.created,
		created: base.created,
		modified: base.modified,
		slug: base.slug,
		title: base.title,
	};
}

async function getGallery() {
	// Learn more: https://www.sanity.io/docs/data-store/how-queries-work
	const filter = groq`*[_type == "note"]`;
	const projection = groq`{
		base,
    content
  }`;
	const order = `| order(date desc)`;
	const query = [filter, projection, order].join(" ");
	const docs = await client.fetch(query).catch((err) => console.error(err));
	const preparePosts = docs.map(generateImageData);
	return preparePosts;
}

module.exports = getGallery;
