'use strict'

const mongoose = require('mongoose')
const server = require('./server')
const config = require('./config')


console.log('connecting with database...')
mongoose.connect(config.URI, async ()=>{
    await console.log('database ready connected.')
    server.listen(config.PORT, ()=>{
        console.log(`server running at http://localhost:${config.PORT}`)
    })
})
