const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  context: `${__dirname}/views`,
  entry: {
    main: [
      'webpack-hot-middleware/client',
      './app.js'
    ],
    card: [
      'webpack-hot-middleware/client',
      './card.js'
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss?sourceMap', 'sass?sourceMap']
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loaders: ['url?limit=10000']
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loaders: ['file']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  },
  postcss: [
    require('autoprefixer')({ browsers: ['last 3 versions'] })
  ]
}
