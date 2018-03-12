const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(postgraphile|postgraphile-core|graphile-build|graphile-build-pg|graphql-parse-resolve-info))/,
        loader: "babel-loader",
        options: {
          plugins: ["@babel/plugin-proposal-object-rest-spread"],
          presets: [["@babel/env", {
            target: {
              node: "6.10"
            }
          }]]
        }
      }
    ]
  },
  externals: [
    nodeExternals({
      whitelist: [
        'postgraphile',
        'postgraphile-core',
        'graphile-build',
        'graphile-build-pg',
        'graphql-parser-resolve-info',
      ]
    })
  ]
};