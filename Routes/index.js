const express=require('express')
const languagesController=require('../Controllers/languages')
const coursetypesController=require('../Controllers/coursetypes')
const mentordetailsController=require('../Controllers/mentordetails')
const userController=require('../Controllers/users')
const paymentController = require('../Controllers/payments');
const adminMentorController=require('../Controllers/admin/mentorDetails')
const adminCourseController=require('../Controllers/admin/courseDetails')
const adminUserController=require('../Controllers/admin/userDetails')
const route=express.Router()
route.get('/language',languagesController.getLanguages)
route.get('/coursetypes',coursetypesController.getcoursetypes)
route.get('/mentordetails/:langId',mentordetailsController.getmentordetailsByLangId)
route.post('/signup',userController.userSignUp)
route.post('/login',userController.userLogin)
route.post('/filter',mentordetailsController.filteredmentordetails)
route.get('/mentordetail/:mentorId',mentordetailsController.getmentordetailsByMentorId)
route.post('/payment', paymentController.payment);
route.post('/callback', paymentController.callback);

// Admin related route
    // view Mentor
route.get('/admin/mentordetails',adminMentorController.getmentordetailsforAdmin)
    // Delete Mentor By Id
route.delete('/admin/deletementor',adminMentorController.deleteMentorByIdforAdmin)
    // Update Mentor By Id
route.patch('/admin/updatementor',adminMentorController.updateMentorByIdforAdmin)
    // Add a new Mentor
// route.post('/admin/creatementor',adminMentorController.createMentorforAdmin)
    // view courses
route.get('/admin/getcourse',adminCourseController.getAllCourses)
    // update Course
route.patch('/admin/updatecourse',adminCourseController.updateCourseforAdmin)
    // delete Course by admin
route.delete('/admin/deletecourse',adminCourseController.deleteCourseforAdmin)
    // Add a new Course
route.post("/admin/createcourse",adminCourseController.createCourseforAdmin)
    // view user
route.get('/admin/userdata',adminUserController.getAllUserDetails)
    // Delete User
route.delete('/admin/deleteuser',adminUserController.deleteUserById)
module.exports=route