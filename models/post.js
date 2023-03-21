const mongoose = require('mongoose')

const postSchema = mongoose.Schema({

message: String,

name: {
    type: String,
    default: "Anonymous"
},


})

module.exports = (mongoose.model('Posts', postSchema))