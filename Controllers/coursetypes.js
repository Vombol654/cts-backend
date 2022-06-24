const CourseTypes=require('../Models/coursetypes')
exports.getcoursetypes=(req,res)=>{
    CourseTypes.find().then(response=>{
        res.status(200).json({
            message:"coursetypes fetched successfully",
            coursetypes:response
        })
    }).catch(err=>console.log(err))
}