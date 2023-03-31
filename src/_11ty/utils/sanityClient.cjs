require("dotenv");

const { createClient } = require("@sanity/client");

module.exports = createClient({
	projectId: process.env.SANITY_PROJECT_ID,
	dataset: process.env.SANITY_DATASET,
	apiVersion: "2022-03-27",
	useCdn: false,
	token: process.env.SANITY_READ_TOKEN,
});
