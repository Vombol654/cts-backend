const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mentorDetailsSchema = new Schema({
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
  rating: {
    type:Number,
    require: true
  },
  expert: {
    type: String,
    required: true,
  },
  language_id: {
    type: Number,
    require: true,
  },
  cost: {
    type: Number,
    requred: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  course_id: {
    type: String,
    required: false,
  },
  about: {
    type: String,
    required: true,
  },
 
  lcost:{
    type: String,
    requred: true,
  },
  hcost:{
    type: String,
    requred: true
  },
  features_id: {
    type: Array,
    required: true,
  },
  images: {
    type: String
  },
  features: {
    type: Array,
    required: true,
  }

});
module.exports = mongoose.model(
  "mentors",
  mentorDetailsSchema,
  "mentor_details"
);
