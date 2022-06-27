const router = require("express").Router();
const { login, register } = require("../controllers/auth");
const { profile, addstaff, deleteUser, updateUser } = require("../controllers/staff");
const {userData} = require("../controllers/dashboard")
// const { isLoggedin } = require("../middleware/auth");

router.post("/login", login);
router.post("/adduser", register);
router.post("/profile", addstaff);
router.get("/profile/:id", profile );
router.delete("/profile/:id", deleteUser );
router.post("update/:id", updateUser );
router.get("/userdata", userData );

module.exports = router;
