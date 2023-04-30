import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
	output: {
		dir: "_site/js",
		sourcemap: process.env.ELEVENTY_ENV !== "production",
	},
	plugins: [nodeResolve()],
};
