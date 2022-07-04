const User = require('../Models/users');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
exports.userSignUp = (req, res) => {
    const { email, password, firstname, lastname } = req.body;
const hashedPassword=bcrypt.hashSync(password)
    const userObj = new User({
        email,
        password:hashedPassword,
        // password,
        firstname,
        lastname
    });
    User.find(
      {
        email,
        password:hashedPassword
      })
      .then((result)=>{
      if(result.length>0){
        res.status(400).json({
          message:"user is already registered"
        })
      }
      else{
        userObj.save()
            .then(response => {
                res.status(200).json({
                    message: "User Registered Succesfully",
                    user: response
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
      }
    })
}

exports.userLogin = (req, res) => {
    const { email, password } = req.body;

    User.findOne({
        email,
        // password
    })
        .then(response => {
            // console.log(response["password"])
            if (bcrypt.compareSync(password,response["password"])) {
                const token=jwt.sign({id:response._id},process.env.JWT_SECRET_KEY,{
                    expiresIn:"1hr"
                })
                res.status(200).json({
                    message: "User Validated Succesfully",
                    isAuthenticated: true,
                    user: response,
                    token
                })
            }
            else {
                res.status(400).json({
                    message: "User Not Validated Succesfully",
                    isAuthenticated: false,
                    user: response
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}