const express = require('express')
const mongoose = require('mongoose')

const app = express()

// middlewares

//routes

// server configuration

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server listing on port : ${PORT}`));