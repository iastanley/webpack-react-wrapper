const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'var',
    library: 'renderReactWidget',
    path: path.resolve(__dirname, 'builds'),
    filename: 'react-widget.js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        include: __dirname
      }
    ],
  },
};