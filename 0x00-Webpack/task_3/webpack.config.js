const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: './src/header/header.js',
    body: './src/body/body.js',
    footer: './src/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8564,
    contentBase: './public',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassingOnDebug: true,
              disable: true
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Holberton Dashboard',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
