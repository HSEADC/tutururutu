const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlPages = require("./webpack.pages");

// const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // mode: "development",
  entry: {
    index: "./src/javascripts/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(".", "docs"),
  },
  // output: {
  //   path: path.resolve(__dirname, "dev_build"),
  //   filename: "index.js",
  // },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|webp|gif)/,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack v5, you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    ...htmlPages,
    // new CopyPlugin({
    //   patterns: [
    //     { from: "source", to: "dest" },
    //     { from: "other", to: "public" },
    //   ],
    // }),
  ],
};
