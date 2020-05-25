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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

module.exports = config;