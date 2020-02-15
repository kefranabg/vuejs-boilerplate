// eslint-disable-next-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  configureWebpack: {
    plugins: [
      /* Refer to https://www.npmjs.com/package/webpack-bundle-analyzer for more details */
      new BundleAnalyzerPlugin({
        analyzerMode: 'disabled',
        generateStatsFile: true
      })
    ]
  }
}
