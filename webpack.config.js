var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name].js'
  },
  plugins: [
    // 允许错误不打断程序
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.(css|less)$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: './images/[name].[ext]'
        }
      }]
    }]
  },
  resolve: {
    extensions: [
      '.js',
      '.css',
      '.less',
      '.png',
      '.jpg'
    ],
    alias: {
      _: path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    hot: false,
    disableHostCheck: true,
    contentBase: [path.join(__dirname, 'build')],
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 9898,
    stats: {
      colors: true
    }
  }
}