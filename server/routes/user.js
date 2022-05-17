const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const user = require("../controllers/User");
const userRouter = Router();

// REGISTER NEW USER
userRouter.post("/register", user.registerUser);

// USER LOGIN
userRouter.post("/login", user.userLogin);

// GET USER
userRouter.get("/find", userMiddleware, user.getUserProfile);

// GET ALL USERS
userRouter.get("/allUsers", user.getAllUsers);

// USER LOGOUT
userRouter.post("/logout", userMiddleware, user.userLogout);

// DELETE USER
// userRouter.delete()

exports.userRouter = userRouter;
