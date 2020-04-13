const { RemoveAngular } = require('./dist/remove-angular');

const postRenderers = [RemoveAngular];

exports.config = {
  projectRoot: "./src",
  projectName: "sou-dev",
  defaultPostRenderers: postRenderers,
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      },
      postRenderers
    },
  }
};