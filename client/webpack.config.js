const importer = require('sass-import-modules').importer;
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const dist = path.join(__dirname, '..', 'server', 'public', 'dist');

module.exports = {

  entry: path.join(__dirname, 'src', 'app.js'),

  output: {
    path: dist,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  sassLoader: {
    importer: importer({resolvers: ['local', 'node', 'partial']})
  },


  module: {
    loaders: [
      {test: /\.jsx?$/, loader: "babel-loader"},

      // Used for Bootstrap Less Source Files
      { test: /\.less/, loader: 'style!css!less' },
      // Used for Bootstrap Less Source Files
      { test: /\.css/, loader: 'style!css' },
      // Used for Bootstrap Glyphicon Fonts
      { test: /\.(woff2|woff|ttf|svg|eot)$/, loader: 'file' }
    ]
  },

  plugins: [
    // this plugin does a better job of detecting file system
    // changes than running webpack without it
    new webpack.OldWatchingPlugin()
  ],

  // we don't want to watch the process of bundling write to the screen
  progress: false,


  resolve: {
    // the folders where webpack will look for modules
    // and JS code to bundle should it be imported into 
    // the application
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js']
  }
};