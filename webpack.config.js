var webpack = require('webpack');
var vue = require("vue-loader");

module.exports = {
  entry: './example/main.js',
  output: {
    path: './static',
    publicPath: 'http://localhost:8080/static/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass?sourceMap'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      }, {
        test: /\.woff?$/,
        loader: "url-loader?limit=10000"
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js','.sass','.vue','.eot','.woff','.ttf','.svg','.png','.jpg']
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
};
