const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
       username: {
         type:String,
         required: false
       },

       firstname: {
              type: String,
              required: false
       },

       lastname: {
              type: String,
              required: false
       },

       password: {
              type: String,
              required: false
       }, 

       email: {
              type: String,
              required: false
       }

})

//export 
module.exports = User = mongoose.model('users', UserSchema)
