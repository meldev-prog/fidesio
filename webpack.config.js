const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports= {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./bundle.js"
  },
  module: {
    rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(jpg|jpeg|png|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'assets/images',
                },
              },
            ],
          },
          {
            test: /\.html$/,
            use: ['html-loader'],
          },
          {
            test: /\.(jpe?g|png|gif|svg)$/i,
            type: "asset",
         },
        ],
  },
     optimization: {
       minimizer: [
         "...",
         new ImageMinimizerPlugin({
           minimizer: {
             implementation: ImageMinimizerPlugin.imageminMinify,
             options: {
               // Lossless optimization with custom option
               // Feel free to experiment with options for better result for you
               plugins: [
                 ["gifsicle", { interlaced: true }],
                 ["jpegtran", { progressive: true }],
                 ["optipng", { optimizationLevel: 5 }],
                 // Svgo configuration here https://github.com/svg/svgo#configuration
                 [
                   "svgo",
                   {
                     plugins: [
                       {
                         name: "preset-default",
                         params: {
                           overrides: {
                             removeViewBox: false,
                             addAttributesToSVGElement: {
                               params: {
                                 attributes: [
                                   { xmlns: "http://www.w3.org/2000/svg" },
                                 ],
                               },
                             },
                           },
                         },
                       },
                     ],
                   },
                 ],
               ],
             },
           },
         }),
       ],
     },
  plugins: [
      new HtmlWebpackPlugin({
        template: './src/slide.html',
        filename: 'slide.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/logos.html',
        filename: 'logos.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/articles.html',
        filename: 'articles.html',
      }),
    ],
    stats: {
        children: true,
    },
}
