const express = require("express");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.route("/login").post(loginController);

//POST || REGISTER USER
router.route("/register").post(registerController);

module.exports = router;
