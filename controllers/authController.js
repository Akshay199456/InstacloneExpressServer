const express = require('express');
const router  = express.Router();
const bcrypt = require("bcryptjs");
// const User = require("../models/user");

// Small change for testing

router.get('/',  async (req, res) => {
	// const foundUser = await User.findOne({username: req.session.username});
	res.json({
		status: 200,
		data: "server working"
	});
});