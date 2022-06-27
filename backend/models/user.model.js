const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  staffid: {
    type: String,
    required: [true, 'Please input your StaffID'],
    unique: true,
    trim: true,
    minlength: 7,
  //   validator: async function(staffid) {
  //     const user = await this.model('User').findOne({ staffid });
      
  //     if (user.staffid === staffid) return true;
  //     else return 
  //   }
  },
  password: {
    type: String,
    required: [true, 'Please input your password'],
    minlength: 6,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
