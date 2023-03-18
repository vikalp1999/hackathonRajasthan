const mongoose= require("mongoose");

const UserSchema= mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile_number:{
       type:Number,
       required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    adhar_number:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        enum:["doctor",
            "user"],
        default:"user"
    },
    vaccine:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"vaccine"
    }],
    test:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"test"
    }],
    child:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"test"
    }]
})

const User= mongoose.model("user",UserSchema);
module.exports=User;