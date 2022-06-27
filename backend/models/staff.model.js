const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  staffid: {
    type: String,
    required: [true, "Please input your StaffID"],
    unique: true,
    trim: true,
    minlength: 7,
  },
  firstName: {
    type: String,
    required: [true, "Please input your First Name"],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please input your Last Name"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, "Please input your Gender"],
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please input your Phone Number"],
    unique: true,
    trim: true,
    minlength: 11,
  },
  address: {
    type: String,
    required: [true, "Please input your Address"],
  },
  Email: {
    type: String,
    required: [true, "Please input your Email"],
    unique: true,
    trim: true,
  },
  DateOfBirth: {
    type: String,
    required: [true, "Please input your Date of Birth"],
    trim: true,
  },
  faculty: {
    type: String,
    required: [true, "Please input your Faculty"],
    trim: true,
  },
  dapartment: {
    type: String,
    required: [true, "Please input your Department"]
  },
  category: {
    type: String,
    required: [true, "Please select category"],
    trim: true,
  }
});

const Staff = mongoose.model("Staff", UserSchema);
module.exports = Staff;
