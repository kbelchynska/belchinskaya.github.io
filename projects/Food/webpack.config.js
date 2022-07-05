'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,//находим файлы .js
        exclude: /(node_modules|bower_components)/,//какие файлы мы должны исключить из выборки
        use: {//как и что мы будем использовать
          loader: 'babel-loader',//технологие которая связывает webpack с babel
          options: {
            presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"// выбирает только те полифиллы, которые используются
            }]]
          }
        }
      }
    ]
  }
};