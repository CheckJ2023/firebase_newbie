//create path by calling path module
const path = require('path')

//export an object from this file with the properties
//properties
//mode could be 'production' and 'development'
//entry for source codes
//output is an object need absolute path...
//watch the change of source files  
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path : path.resolve(__dirname,'dist'),
     filename: 'bundle.js'
  },
  watch: true
}
