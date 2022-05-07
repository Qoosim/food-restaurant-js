const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
     }),
   ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
*/
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
     //print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
   new HtmlWebpackPlugin({
     title: 'Development',
   }),
  ],
  output: {
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist'),
   clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
  },
 };
