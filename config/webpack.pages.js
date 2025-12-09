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
  createPages("./src/pages/films/film_1.html", "./pages/films/film_1.html", [
    "index",
  ]),
  createPages("./src/pages/films/film_2.html", "./pages/films/film_2.html", [
    "index",
  ]),
  createPages("./src/pages/about.html", "./pages/about.html", ["index"]),
  createPages("./src/pages/articles.html", "./pages/articles.html", ["index"]),
  createPages("./src/pages/cards.html", "./pages/cards.html", ["index"]),
  createPages("./src/pages/tests.html", "./pages/tests.html", ["index"]),
  createPages("./src/pages/styleguide.html", "./pages/styleguide.html", [
    "styleguide",
  ]),
];

module.exports = htmlPages;
