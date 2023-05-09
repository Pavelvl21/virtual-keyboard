import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export default {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new ESLintPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
