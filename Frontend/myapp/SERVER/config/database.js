const mongoose = require('mongoose')
require("dotenv").config();

const dbConncet = () =>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connection successfully")
    })
    .catch((error)=>{
        console.log("Conncetion Error......",error)
        process.exit(1)
    })
}

module.exports = dbConncet;