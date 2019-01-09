const env = require('yargs').argv.env;

const libraryName = 'randoml';

let outputFile, mode, devtool;

if (env === 'build') {
  mode = 'production';
  outputFile = `${libraryName}.min.js`;
  devtool = false;
} else {
  mode = 'development';
  outputFile = `${libraryName}.js`;
  devtool = 'source-map';
}

const config = {
  mode,
  entry: `${__dirname}/src/${libraryName}.ts`,
  externals: ['brain.js'],
  devtool,
  output: {
    path: `${__dirname}/lib`,
    filename: outputFile,
    library: 'RandoML',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'global'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
