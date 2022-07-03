const express = require("express");
const commonController = require("../Controllers/common");
const languagesController = require("../Controllers/languages");
const coursetypesController = require("../Controllers/coursetypes");
const mentordetailsController = require("../Controllers/mentordetails");
const mentorController = require("../Controllers/mentor");
const userController = require("../Controllers/users");
const paymentController = require("../Controllers/payments");
const route = express.Router();
route.get("/language", languagesController.getLanguages);
route.get("/coursetypes", coursetypesController.getcoursetypes);
route.patch("/coursetypes/update", coursetypesController.updateCourse);
route.get(
  "/mentordetails/:langId",
  mentordetailsController.getmentordetailsByLangId
);
route.get("/users/getUsers", userController.getAllUsers);
route.get("/mentors/getMentors", mentorController.getAllMentors);
route.post("/signup/mentee", userController.signupuser);
route.post("/signup/mentor", mentorController.signupmentor);
route.get("/deleteUser/:email", userController.deleteUser);
route.get("/deleteUserId/:_id", userController.deleteUserById);
// route.post("/login", userController.loginusers);
route.post("/login", commonController.login);
route.post("/filter", mentordetailsController.filteredmentordetails);
route.get(
  "/mentordetail/:mentorId",
  mentordetailsController.getmentordetailsByMentorId
);
route.post("/payment", paymentController.payment);
route.post("/callback", paymentController.callback);

module.exports = route;
