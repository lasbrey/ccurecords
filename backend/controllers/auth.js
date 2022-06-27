const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

exports.login = async (req, res) => {
  try {
    const { staffid, password } = req.body;
    //check if details are submitted
    if (!staffid || !password) {
      return res.status(400).json({ message: "No details provided" });
    }
    //find user
    const user = await User.findOne({ staffid }).exec();
    // user does not exist
    if (!user) {
      return res.status(400).json({ message: "The Staff does not exist" });
    }
    //Check password
    if (bcrypt.compareSync(password, user.password)) {
      return res.status(200).json({ message: "Authentication complete" , user});
    } else {
      res.status(400).json({
        message: "Authentication Failed!",
      });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

exports.register = async (req, res) => {
  try {
    const { staffid, password } = req.body;

    //hashpassword
    let hashedPassword = await bcrypt.hash(password, 8);

    // Create user
    const user = await User.create({ staffid, password: hashedPassword });
    res.status(200).json({ message: "Registered Sucessfully" });
    // User.findOne({ staffid }, (e, data) => {
    //   if (data.length == 0) {
    //     let User = new user({
    //       staffid,
    //       password: hashedPassword,
    //     });
    //     User.save((e, data) => {
    //       if (e) {
    //         res.status(400).json({
    //           errorMessage: e,
    //           status: false,qq
    //         });
    //       } else {
    //         res.status(200).json({
    //           status: true,
    //           title: "Successfully Registered.",
    //         });
    //       }
    //     });
    //   } else {
    //     res.status(400).json({
    //       errorMessage: `Staffid ${staffid} Already Exist!`,
    //       status: false,
    //     });
    //   }
    // });
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
