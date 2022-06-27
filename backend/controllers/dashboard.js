const Staff = require("../models/staff.model");

exports.userData = async (req, res) => {
  try {
    const user_data = await Staff.find({});

    if (user_data) {
      res.status(200).send(user_data);
    } else {
      res.status(404).json({ message: "No Staff Found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
