'use strict'
const dbname = 'mean-crud'
const port = 3000


module.exports = {
    PORT: process.env.PORT || port,
    URI: process.env.MONGODB || `mongodb://localhost:27017/${dbname}`
}