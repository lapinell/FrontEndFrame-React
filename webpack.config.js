const env = process.env.NODE_ENV
const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: env,

  entry: './src/index.js', // where are we starting; 
                          // every starting file including css must be imported here for webpack to see it and work with it
                          // see index.js for more explanation
  output: {
    filename: 'bundle.js', // name the file
    path: path.resolve(__dirname, 'dist') // where the bundle will land
  },

  plugins: [
    new HTMLWebpackPlugin ({ // generates an HTML file for you
      template: './src/index.html' // or in our case we use our own template
    })
  ],

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // transpiles JSX into JS all browsers can understand
        }
        // presets are located in the .babelrc
      }, 
      {
        test: /\.css$/i, 
        use: [ 
          'style-loader', // injects CSS into the DOM
          'css-loader', // tranlates @import and url() 
        ]
      }
    ]
  }
}