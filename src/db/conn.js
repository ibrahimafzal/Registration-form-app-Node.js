const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Registration").then(()=>{
    console.log(`mongodb connection successfull`)
}).catch((e)=>{
    console.log(`no connection with mongodb`)
})
