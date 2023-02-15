const mongoose = require('mongoose');

const URL = process.env.MONGO_URL;

const connectToDB = () =>{
    mongoose.set('strictQuery', false);
    mongoose.connect(URL).then((connection)=>{
        console.log(`Connected to DB: ${connection.connection.host}`);
    }).catch((error)=>{
        console.log(error.message);
        process.exit(1);
    });
}

module.exports = connectToDB;
