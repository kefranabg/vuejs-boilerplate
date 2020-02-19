// eslint-disable-next-line import/no-extraneous-dependencies
const postcssPresetEnv = require('postcss-preset-env')

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 3,
      importFrom: './src/theme/custom-media-definition.css',
      features: { 'custom-media-queries': true }
    })
  ]
})
