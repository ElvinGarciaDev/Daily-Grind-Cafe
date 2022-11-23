const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth"); // Middleware that makes sure the user is logged in

//Main Routes - simplified for now
router.get("/", homeController.getIndex); // When the router hears this request go to this controller
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed); //Pass in ensureAuth to make sure the user is logged in
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

// A cashier can submit an order from the / root. No need to login, only baristas can login
router.post("/", postsController.createPost)

module.exports = router;