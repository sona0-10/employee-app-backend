const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    Ename:String,
    location:String,
    position:String,
    salary:Number
})
const postModel = mongoose.model('post',Schema);
module.exports = postModel;