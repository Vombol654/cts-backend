const User = require("../Models/users");
const checkAlreadySignedUp = require("./common").checkAlreadySignedUp;

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.signupuser = async (req, res) => {
  console.log("SignUp new user initiated...");
  const { email, password, firstname, lastname, imageUrl, userType } = req.body;
  const checkUser = await checkAlreadySignedUp(email);
  console.log(checkUser);

  if (checkUser === null) {
    const user = new User({
      email,
      password,
      firstname,
      lastname,
      imageUrl,
      userType,
    });
    user
      .save()
      .then((response) => {
        res.status(200).json({
          message: "user registered  successfully",
          user: response,
        });
      })
      .catch((err) => console.log(err));
  } else {
    console.log("User Alredy exist with same email id");
    res.json({
      message: "User Alredy exist with same email id",
      user: checkUser,
    });
  }
};

exports.loginusers = async (req, res) => {
  const { email, password } = req.body;
  let user = User.find({ email, password });
  console.log(user);
  if (user === null) {
    user = Mentor.find({ email, password });
  }
  // if(user===null){

  // }
  // else{
  user
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "user data validated successfully",
          isAuthenticated: true,
          user: response[0],
        });
      } else {
        res.status(200).json({
          message: "user is not validated",
          isAuthenticated: false,
          user: response,
        });
      }
    })
    .catch((err) => console.log(err));
  // }
};

exports.deleteUser = async (req, res) => {
  const { email } = req.params;
  const response = await User.findOneAndDelete({ email });
  res.json(response);
};

exports.deleteUserById = async (req, res) => {
  const { _id } = req.params;
  const response = await User.findOneAndDelete({ _id });
  res.json(response);
};
