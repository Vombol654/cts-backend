const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const coursetypeSchema=new Schema({
    id:{
        type:String
    },
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
        type:Number
    },
    skillsRequired:{
        type:Array
    }
   
})
module.exports=mongoose.model('coursetype',coursetypeSchema,'coursetypes')