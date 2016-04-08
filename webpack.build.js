var config = require('./webpack.config.js')

config.entry = {
  'ecfexui-vue': './example/main.js',
}

config.output = {
  filename: './dist/[name].js',
  library: 'ecfexui-vue',
  libraryTarget: 'umd'
}

module.exports = config