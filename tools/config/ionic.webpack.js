/**
* @Author: Nicolas Fazio <webmaster-fazio>
* @Date:   09-04-2017
* @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 27-10-2017
*/

/**
 * Ionic Webpack config v.0.1.0
 */

var webpack = require('webpack');
var config = require('@ionic/app-scripts/config/webpack.config.js')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Webpack Dev Config
config.dev.plugins.push(...[
  //new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|en|fr-ch|it/), // this will reduce but not better then the next one.
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // new BundleAnalyzerPlugin({
  //   reportFilename: 'report.html',
  //   openAnalyzer: true,
  // })
])

// Webpack Prod Config
config.prod.devtool = 'cheap-source-map';
config.prod.plugins.push(...[
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // new BundleAnalyzerPlugin({
  //   reportFilename: 'report.html',
  //   openAnalyzer: true,
  // })
])

module.exports = {
  dev: config.dev,
  prod: config.prod
}
