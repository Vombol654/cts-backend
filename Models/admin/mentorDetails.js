const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mentorDetailsSchema = new Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  expert: {
    type: String,
    // required: true,
  },
  language_id: {
    type: Number,
    // require: true,
  },
  phone: {
    type: Number,
    // required: false,
  },
  email: {
    type: String,
    // required: true,
  },
  images: {
    type: String,
  },

  mentor: {
    type: Object,
  },
  callCount: {
    type: Number | String,
  },
  rating: {
    type: Number,
    // require: true,
  },
  reviewCount: {
    type: Number,
  },
  totalIntake: {
    type: Number,
    // require: true,
  },
  totalRegistered: {
    type: Number,
    // require: true,
  },
  spotsLeft: {
    type: Number,
  },
  cost: {
    type: Number,
    // required: true,
  },
  course_id: {
    type: String,
    // required: false,
  },
  about: {
    type: String,
    // required: true,
  },

  lcost: {
    type: String,
    // required: true,
  },
  hcost: {
    type: String,
   // required: true,
  },
  features_id: {
    type: Array,
    // required: true,
  },
  features: {
    type: Array,
    // required: true,
  },
  company:{
    type:String,
    // required:true
  },
  tag:{
    type:String,
    // required:true
  },
  status:{
    type:String,
    // required:true
  }
});
module.exports = mongoose.model(
  "mentorship",
  mentorDetailsSchema,
  "mentor_details"
);