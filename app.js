/* imports */
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

// Open Route - Public Route
app.get('/', (req, res) => {
    res.status(200).json({msg: "Bem vindo a nossa API"})
})

//Credentials
const dbUser = process.env.DB_USER
const dbPasssword = process.env.DB_PASS

mongoose.connect(`mongodb+srv://${dbUser}:${dbPasssword}@cluster0.pjrv4eq.mongodb.net/`).then(() => {
    app.listen(3000)
    console.log("Conectou ao banco");
}).catch((err) => console.log(err))
