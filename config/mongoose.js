const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017');

const db=mongoose.connection;

db.error('error',console.error.bind(console,'error in connection with database'));

db.once('open',function(){
    console.log('successfully connect with the database')
})

module.exports=db;