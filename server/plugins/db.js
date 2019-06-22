module.exports = app => {
  var mongoose = require('mongoose')
  mongoose.connect("mongodb://127.0.0.1/wzry",{useNewUrlParser: true}, function (err) {
    if (err) {
      console.log('Connection Error:' + err)
    }else{
      console.log('Connection success!')
    } 
  })
}