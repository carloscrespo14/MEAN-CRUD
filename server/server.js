'use strict'

const express = require('express')
const morgan = require('morgan')
const server = express()


//Middlewares
server.use(morgan('dev'))
server.use(express.json())

//Routes
server.use('/api/employees',require('./routes/employees.routes'))

module.exports = server