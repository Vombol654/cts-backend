const User=require('../Models/users')
exports.getusers=(req,res)=>{
    const {email,password,firstname,lastname}=req.body
    const user= new User({
        email,password,firstname,lastname 
    })
    user.save().then(response=>{
        res.status(200).json({
            message:"user ragistered  successfully",
            user:response
        })
    }).catch(err=>console.log(err))
}

exports.loginusers=(req,res)=>{
    const {email,password}=req.body
   
    User.find({email,password}).then(response=>{
        if(response.length >0){
            res.status(200).json({
                message:"user validated successfully",
                isAuthenticated:true,
                user:response
            })
        }
        else{
            res.status(200).json({
                message:"user is not validated",
                isAuthenticated:false,
                user:response
            })
        } 
    }).catch(err=>console.log(err))
}