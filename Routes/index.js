const express=require('express')
const languagesController=require('../Controllers/languages')
const coursetypesController=require('../Controllers/coursetypes')
const mentordetailsController=require('../Controllers/mentordetails')
const userController=require('../Controllers/users')
const paymentController = require('../Controllers/payments');
const route=express.Router()
route.get('/language',languagesController.getLanguages)
route.get('/coursetypes',coursetypesController.getcoursetypes)
route.get('/mentordetails/:langId',mentordetailsController.getmentordetailsByLangId)
route.post('/signup',userController.getusers)
route.post('/login',userController.loginusers)
route.post('/filter',mentordetailsController.filteredmentordetails)
route.get('/mentordetail/:mentorId',mentordetailsController.getmentordetailsByMentorId)
route.post('/payment', paymentController.payment);
route.post('/callback', paymentController.callback);

module.exports=route