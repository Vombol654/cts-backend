const express = require("express");
const commonController = require("../Controllers/common");
const languagesController = require("../Controllers/languages");
const coursetypesController = require("../Controllers/coursetypes");
const mentorServiceController = require("../Controllers/mentorService");
const mentorshipdetailsController = require("../Controllers/mentorshipdetails");
const mentorController = require("../Controllers/mentor");
const userController = require("../Controllers/users");
const paymentController = require("../Controllers/payments");
const route = express.Router();

// LANGUAGE
route.get("/language", languagesController.getLanguages);

// COURSES
route.get("/coursetypes", coursetypesController.getcoursetypes);
route.patch("/coursetypes/update", coursetypesController.updateCourse);

// MENTOR SERVICES
route.get("/mentorservices", mentorServiceController.getMentorServices);
route.post("/mentorservices", mentorServiceController.postMentorServices);

// MENTORSHIP
route.post(
  "/mentorshipdetail",
  mentorshipdetailsController.postMentorShipDetails
);
route.get(
  "/mentorshipdetail",
  mentorshipdetailsController.getMentorShipDetails
);

route.delete(
  "/mentorshipdetail/delete/:_id",
  mentorshipdetailsController.deleteMentorShipDetailById
);

route.patch(
  "/mentorshipdetail/update",
  mentorshipdetailsController.updateMentorShipDetail
);
route.get(
  "/mentorshipdetails/:langId",
  mentorshipdetailsController.getmentordetailsByLangId
);
route.post("/filter", mentorshipdetailsController.filteredmentordetails);
route.get(
  "/mentorshipdetail/:mentorId",
  mentorshipdetailsController.getmentordetailsByMentorId
);

// MENTEE
route.get("/users/getUsers", userController.getAllUsers);
route.post("/signup/mentee", userController.signupuser);
route.get("/user/delete/:email", userController.deleteUser);
route.get("/user/deleteById/:_id", userController.deleteUserById);

// MENTOR
route.get("/mentors/getMentors", mentorController.getAllMentors);
route.post("/signup/mentor", mentorController.signupmentor);

// COMMON
route.post("/login", commonController.login);

// PAYMENT
route.post("/payment", paymentController.payment);
route.post("/callback", paymentController.callback);

module.exports = route;
