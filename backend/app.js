require('dotenv').config();

const express = require('express');
const connectToDB = require('./config/db');
const userRouter = require('./routes/registerRoutes');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// connect to DB
connectToDB();

app.use('/', userRouter);

module.exports = app;