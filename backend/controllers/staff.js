const Staff = require("../models/staff.model");

exports.profile = async (req, res) => {
  const id = req.params.id;
  await Staff.findById(id)
    .then(Staff => res.json(Staff))
    .catch((err) => res.status(404).json({ message: `Staff not found with id #${req.params.id}` }));
};


exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  await Staff.findByIdAndDelete(id)
    .then(() => res.json("Deleted Successfully"))
    .catch((err) => res.status(404).json({ message: `Staff not found with id #${req.params.id}` }));
};

exports.updateUser = async (req, res) =>{
  const id = req.params.id;
  const Staff = await Staff.findByIdAndUpdate(id, req.body, {
    new: true, runValidators: true
  });

  if (Staff) {
    res.status(200).json({ success: true, data: Staff })
  } else{
    res.status(404).json({ message: `Staff not found with id #${req.params.id}`})
  }
}

exports.addstaff = async (req, res) => {
  try {
    const {
      staffid,
      firstName,
      middleName,
      lastName,
      gender,
      phoneNumber,
      address,
      Email,
      DateOfBirth,
      faculty,
      dapartment,
      category,
    } = req.body;

    // Create staff record
    const staff = await Staff.create({
      staffid,
      firstName,
      middleName,
      lastName,
      gender,
      phoneNumber,
      address,
      Email,
      DateOfBirth,
      faculty,
      dapartment,
      category,
    });
    res.status(200).json({ message: "Registered Sucessfully" });
  } catch (e) {
    res.status(500).send(e);
  }
};
