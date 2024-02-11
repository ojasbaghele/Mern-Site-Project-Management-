const express = require('express');
const router = express.Router();

require('../db/conn.js');
const User = require("../model/userSchema.js");

const { home_page, register, login } = require('../contollers/auth-controller.js');
router.route("/").get(home_page);
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;