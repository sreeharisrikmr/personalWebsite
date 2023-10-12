//connect mongodb with node
//import mongoose
const mongoose = require('mongoose')
//define connection string between mongoose  and node
mongoose.connect('mongodb://localhost:27017/aportfolio')
//create a model and schema for storing data
const Contact =mongoose.model('Contact',{
    name:String,
    email:String,
    message:String
})
module.exports={
    Contact
}