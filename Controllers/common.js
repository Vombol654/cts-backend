const User = require("../Models/users");
const Mentor = require("../Models/mentor");

exports.checkAlreadySignedUp = async (email) => {
  let user = await User.findOne({ email });
  console.log("I'm from CheckAlreadySignedUp checking mentee \t" + user);
  if (user === null) {
    user = await Mentor.findOne({ email });
    console.log("I'm from CheckAlreadySignedUp checking mentor \t" + user);
    if (user === null) {
      console.log("I'm from CheckAlreadySignedUp checking Admin \t" + user);
      return user;
    }
    return user;
  }

  return user;
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email, password });
  let data = {};
  if (user === null) {
    user = await Mentor.findOne({ email, password });
  }

  if (user === null) {
    data["message"] = "user is not validated"; //"";
    data["isAuthenticated"] = false;
    data["user"] = user;
  } else {
    data["message"] = "user data validated successfully"; //"";
    data["isAuthenticated"] = true;
    data["user"] = user;
  }
  console.log(data);
  res.json({ ...data });
};
