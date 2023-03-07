const express=require('express');
const bodyParser=require('body-parser');
const router = require('./routes');
const db=require('./config/mongoose')



const app=express();


app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json());

app.use(router);

app.listen(8000,function(err){
    if(err){
        console.log('error in loading the server',err)
    }
    console.log('the server listen the port on 8000')
})