const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = [
  {
    mode: 'development',
    entry: './src/electron.ts',
    target: 'electron-main',
    module: {
      rules: [{
        test: /\.ts$/,
        include: /src/,
        use: 'ts-loader'
      }]
    },
    output: {
      path: __dirname + '/dist',
      filename: 'electron.js'
    }
  },
  {
    mode: 'development',
    entry: './src/app/index.tsx',
    target: 'electron-renderer',
    module: {
      rules: [{
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      path: __dirname + '/dist',
      filename: 'zettelkasten.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/app/index.html'
      })
    ]
  }
]