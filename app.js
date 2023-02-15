require('dotenv').config();

const express = require('express');
const userRouter = require('./routes/registerRoutes');
const path = require("path")

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/', userRouter);

// serving the frontend
app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});



module.exports = app;