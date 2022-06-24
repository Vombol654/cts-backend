const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const coursetypesSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    content:{
        type:String
    },
    image:{
        type:String
    },
    course_type:{
        type:Number,
        require:true
    }
   
})
module.exports=mongoose.model('coursetypes',coursetypesSchema,'coursetypes')