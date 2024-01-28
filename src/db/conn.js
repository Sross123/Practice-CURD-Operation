const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/olympics").then(()=>{
    console.info("DB COnnection successfull!!!")
}).catch((e)=>{
    console.warn("No connection!!!")
})