const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'var',
    library: 'showChatTemplate',
    path: path.resolve(__dirname, 'builds'),
    filename: 'chat-template.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        include: __dirname,
        loader: 'babel-loader'
      }
    ],
  },
};