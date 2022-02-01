const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/*-------------------------------------------------*/

module.exports = {
  mode: 'production',

  entry: './src/index.prod.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    // extract css to external stylesheet file
    new MiniCssExtractPlugin({
      filename: 'build/styles.css',
    }),

    // prepare HTML file with assets
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      minify: false,
    }),

    // copy static files from `src` to `dist`
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
  ],

  // resolve files configuration
  resolve: {
    // file extensions
    extensions: ['.js', '.jsx', '.scss'],
  },

  // webpack optimizations
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: /node_modules/,
        },
      },
    },
  },

  // development server configuration
  devServer: {
    port: 8088,
    historyApiFallback: true,
  },

  // generate source map
  devtool: 'source-map',
};
