const { Router } = require('express');
const userMiddleware = require('../middleware/user');
const user = require('../controllers/User');
const userRouter = Router();

// USER
// Register user
userRouter.post('/register', user.registerUser);

// User login
userRouter.post('/login', user.userLogin);

// User profile
userRouter.get('/find/:id', userMiddleware, user.getUserProfile);

// All users
userRouter.get('/allUsers', user.getAllUsers);

// User logout
userRouter.post('/logout', userMiddleware, user.userLogout);

exports.userRouter = userRouter;