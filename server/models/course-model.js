const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: { type: String },
  user_id: { type: String },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  students: {
    type: [Object],
    // password: false,
    default: [],
  },
  startDate: {
    type: Date,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);
module.exports = Course;
