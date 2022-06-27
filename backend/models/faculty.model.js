const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    faculty: {
    type: String,
    required: [true, "Please input your Faculty"],
    unique: true,
    trim: true,
    minlength: 7,
  }
});

const Faculty = mongoose.model("Faculty", UserSchema);
module.exports = Faculty;
