//importing middleware
const express = require("express");
//accept requests with body
const body_parser = require("body-parser");
//compress requests
const cors = require("cors");

//init config my server
const app = express();

//assigning the middleware
app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());



module.exports = app;




