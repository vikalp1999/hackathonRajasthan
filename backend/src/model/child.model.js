const mongoose= require("mongoose");

const childSchema=mongoose.Schema({
    Birt_date:{
        type:Date
    },
    vaccine:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vaccine"
    }],
    test:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"test"
    }],
})