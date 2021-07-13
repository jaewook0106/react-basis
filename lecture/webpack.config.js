const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스는 : production
  devtool: 'eval', //빠르게
  
  resolve: {
    extensitons: ['.js', '.jsx']
  }
  entry: {
    app: ['./Client']
  },// 입력
  output: {
    path: path.join(__dirname, 'dist'),  // __dirname 현재폴더
    filename: 'app.js'
  }, // 출력
}