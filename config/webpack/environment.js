const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  "window.jQuery": "jquery",
  Popper: ['popper.js', 'default'],
  "window.Tether": 'tether'
}))

module.exports = environment
