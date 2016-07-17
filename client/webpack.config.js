const importer = require('sass-import-modules').importer;
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');


const dist = path.join(__dirname, 'public', 'dist');

const variables = {
  'uxcore-market': process.env.LOCALE || 'en',
  'uxcore-label': process.env.UXCORE_LABEL || 'gd'
};

module.exports = {

  entry: path.join(__dirname, 'src', 'app.js'),

  output: {
    filename: path.join(dist, 'bundle.js')
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  sassLoader: {
    importer: importer({ resolvers: ['local', 'node', 'partial'] })
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader?presets[]=es2015,presets[]=react'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader!postcss?parser=postcss-scss'
    }]
  },
  postcss: () => [
    require('postcss-global-scss-vars')({ variables })
  ]
};