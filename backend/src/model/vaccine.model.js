const mongoose = require("mongoose");

let vaccineSchema= mongoose.Schema({
    name:{
        type:String,

    },
    date:{
          type:Date
    }
})