const path = require('path');
const ClosureCompilerPlugin = require('closure-webpack-plugin')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  },
  plugins: [
    new ClosureCompilerPlugin.LibraryPlugin(
      {
        closureLibraryBase: require.resolve(
          'google-closure-library/closure/goog/base'
        ),
        deps: [
          require.resolve('google-closure-library/closure/goog/deps'),
          './public/deps.js',
        ],
      })
  ],
  devServer: {
    open: true,
    contentBase: path.resolve(__dirname, 'public')
  }
}
