"use strict";
require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const routes  = require('./routes');
const PORT = process.env.PORT || 3030;
const app = express();
const router = express.Router()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost"

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.use("/api", routes);


router.get('/', (req, res) => {
    res.send({message: 'Hi'})
})

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

