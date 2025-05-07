import { Schema, model, models } from "mongoose";
const CourseSchema = new Schema({
  Title: {
    type: [String],
    unique: true,
    required: [true, "required"],
  },
  Ratings: {
    type: String,
    required: [true, "required"],
  },
  Image: {
    type: [String],
    required: [true, "required"],
  },
  Reviews: {
    type: String,
    required: [true, "required"],
  },
  Link: {
    type: String,
    required: [true, "required"],
  },
  Category: {
    type: String,
    required: [true, "required"],
  },
  Name: {
    type: [String],
    required: [true, "required"],
  },
  DescriptionMain: {
    type: String,
    required: [true, "required"],
  },
  DescriptionShort: {
    type: [String],
    required: [true, "required"],
  },
  Instructors: {
    type: [String],
    required: [true, "required"],
  },
  Learn: {
    type: [String],
    required: [true, "required"],
  },
  Prereq: {
    type: [String],
    required: [true, "required"],
  },
  Details: {
    type: [String],
    required: [true, "required"],
  },
  Tags: {
    type: [String],
    required: [true, "required"],
  },
});

const Course = models.Course || model("Course", CourseSchema);

export default Course;
