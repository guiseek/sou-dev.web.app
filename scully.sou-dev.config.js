const { RemoveAngular } = require('./dist/remove-angular');
const { AddPrismJs } = require('./dist/add-prismjs');

const postRenderers = [RemoveAngular, AddPrismJs];

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