const mongoose= require("mongoose");

const testSchema= mongoose.Schema({
    weight:{
        type:Number,
    },
   fast_sugarlevel:{
     type:Number,
    },
   diet_sugarlevel:{
        type:Number,
       },
     min_Bp:{
        type:Number
     },
     max_Bp:{
        type:Number
     },
     weight:{
        type:Number
     },
     date:{
        type:Date
     }  
})
const Test= mongoose.model("test", testSchema);
module.exports=Test;