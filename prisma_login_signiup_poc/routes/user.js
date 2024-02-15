const express = require("express");


const router = express.Router();
const signInComponent = require("../components/user/signin");
const loginComponent = require("../components/user/login");
const getUserComponent = require("../components/user/get.user");
const { jwtAuth } = require("../middleware/passport");


router.post("/signin" , signInComponent);
router.post("/login" , loginComponent);
router.get("/getUser" ,jwtAuth, getUserComponent);


module.exports = router;