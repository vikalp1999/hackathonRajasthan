const mongoose = require("mongoose");

let vaccineSchema= mongoose.Schema({
    name:{
        type:String,

    },
    date:{
          type:Date
    },
    status:{
        type:String,
        enum:["true","false"],
        default:"true"
    }
});

const User= mongoose.model("")