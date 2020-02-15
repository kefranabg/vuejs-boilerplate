const merge = require('webpack-merge')
const path = require('path')
const fs = require('fs')
const defaultConfiguration = require('./config/config.default')

// eslint-disable-next-line no-underscore-dangle
global.__rootDirname = path.join(__dirname, 'dist')

const environmentConfigurationPath = `./config/config.${process.env.NODE_ENV}.js`

const environmentConfiguration = fs.existsSync(environmentConfigurationPath)
  ? require(environmentConfigurationPath) // eslint-disable-line
  : {}

const config = merge(defaultConfiguration, environmentConfiguration)

if (process.env.NODE_ENV === 'analyse-bundle') {
  process.env.NODE_ENV = 'production'
}

module.exports = config
