const { resolve } = require('path')
const webpack = require('webpack')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:8080',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './index.js'
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  context: resolve(__dirname, 'src'),

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style',
          'css?modules&importLoaders=1',
          {
            loader: 'postcss',
            options: {
              plugins: function () {
                return [
                  require('postcss-cssnext'),
                  require('postcss-nested')
                ]
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

    // start webpack dashboard
    new DashboardPlugin({ port: 3001 })
  ]
}
