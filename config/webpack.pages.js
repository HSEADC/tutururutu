const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html"),
  createPages("./src/pages/films/film_1.html", "./pages/films/film_1.html"),
  createPages("./src/pages/films/film_2.html", "./pages/films/film_2.html"),
];


module.exports = htmlPages