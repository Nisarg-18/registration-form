const express = require('express');
const { getAllUsers } = require('../controllers/allUsers');

const userRouter = express.Router();

const { registerUser } = require('../controllers/registerController');

userRouter.get('/allUsers',getAllUsers);
userRouter.post('/register',registerUser);

module.exports = userRouter;