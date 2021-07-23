const path = require('path');
const webpack = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// process.env.NODE_ENV = 'production';
module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스는 : production
  devtool: 'eval', //빠르게
  
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: {
    app: ['./Client']
  },// 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets:[
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR'],
            },

          }], 
          '@babel/preset-react'
        ],
        plugins:[
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel'
        ],
        
      },
    }],
  },
  plugins: [
    // 추가적으로 사용할경우
    // new webpack.LoaderOptionsPlugin({ debug: true });
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),  // __dirname 현재폴더 실제경로
    filename: 'app.js',
    publicPath: '/dist/'   //가상경로
  }, // 출력

  devServer: {
    publicPath: '/dist/',
    hot: true
  }
}