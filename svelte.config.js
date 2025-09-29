import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    adapter: adapter(),   // defaults to build/ for output
    paths: {
      base: "",   // root of samuel-fisher.com
      assets: ""  // serve assets (_app) from the same domain
    }
  },
};

export default config;