const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    department: {
    type: String,
    required: [true, "Please input your Department"],
    unique: true,
    trim: true,
    minlength: 7,
  }
});

const Department = mongoose.model("Department", UserSchema);
module.exports = Faculty;
