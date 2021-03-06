const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/_pug/index.pug'
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug/,
        use: ['pug-loader']
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
}

module.exports = config;