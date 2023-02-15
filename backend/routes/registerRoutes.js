const express = require('express');

const userRouter = express.Router();

const { home } = require('../controllers/homeController');
const { registerUser } = require('../controllers/registerController');

userRouter.get('/',home);
userRouter.post('/register',registerUser);

module.exports = userRouter;