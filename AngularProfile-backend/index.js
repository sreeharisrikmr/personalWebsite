// //auto load .envfile in to app
// require("dotenv").config();
//2 import express
const express = require("express");
//6 import cors
const cors = require('cors')
const logic = require('./services/logic')
// //import connection.js
// require('./connection')
//3 create an app using express
const server = express();
//4 define port
// const PORT = 5000;
//7 use cors in server app
server.use(cors({
    origin:'http://localhost:4200'
}))

server.use(express.json())
//5-run the app
server.listen(5000, () => {
  console.log("listening on port 5000");
});
//8 define routes
server.get('/',(req,res)=>{
    res.status(200).json('portfolio service started')
})
server.post('/',(req,res)=>{
    console.log("server post");
})
//contact 
server.post('/hireme',(req,res)=>{
    console.log("inside hireme api");
    console.log(req.body);
    //logic to contact me
    logic.contactme(req.body.name,req.body.email,req.body.message).then((response)=>{
        res.status(response.statusCode).json(response)
    })
    
})