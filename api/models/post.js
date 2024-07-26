const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PostSchema = new Schema({
       username: {
         type:String,
         required: false
       },

       title: {
              type: String,
              required: false
       }, 

       body: {
              type: String,
              required: false
       }

})

//export 
module.exports = Post = mongoose.model('posts', PostSchema)