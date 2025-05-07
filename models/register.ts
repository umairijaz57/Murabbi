import { Schema, model, models } from "mongoose";
const RegisterSchema = new Schema({
  FullName: {
    type: String,
    required: [true, "required"],
  },
  Course: {
    type: String,
    required: [true, "required"],
  },
  Email: {
    type: String,
    unique: true,
    required: [true, "required"],
  },
  Gender: {
    type: String,
    required: [true, "required"],
  },
  ContactNumber: {
    type: String,
    required: [true, "required"],
  },
  Organization: {
    type: String,
    required: [true, "required"],
  },
  CNIC: {
    type: String,
    required: [true, "required"],
  },
  Designation: {
    type: String,
    required: [true, "required"],
  },
});

const Register = models.Register || model("Register", RegisterSchema);

export default Register;
