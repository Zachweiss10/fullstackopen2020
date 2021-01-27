const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')



//local imports
const config = require('./utils/config')
const blogRouter = require('./controllers/blog')
const middleware = require('./utils/middleware')


//logger.info('connecting to ', process.env.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then( ()=>{
        logger.info('connected to MongoDB')
    })
    .catch( (error) => {
        logger.error('error conencting to MongoDB:', error.message)
    })


app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use('/api/blogs', blogRouter)
app.use(middleware.requestLogger)


app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app
