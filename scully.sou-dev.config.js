exports.config = {
  projectRoot: "./src",
  projectName: "sou-dev",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};