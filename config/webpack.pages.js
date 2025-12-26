const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages(
    "./src/pages/articles/article.html",
    "./pages/articles/article.html",
    ["index"]
  ),
  createPages(
    "./src/pages/articles/article2.html",
    "./pages/articles/article2.html",
    ["index"]
  ),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages("./src/pages/articles.html", "./pages/articles.html", ["index"]),
  createPages("./src/pages/cards.html", "./pages/cards.html", ["index"]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPages("./src/styleguide.html", "./styleguide.html", ["styleguide"]),
];

module.exports = htmlPages;
