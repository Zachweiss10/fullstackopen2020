//MONGOdb
const mongoose = require('mongoose')
const { json } = require('body-parser')
const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
.then(result => {
console.log('connected to MongoDB')
})
.catch((error) => {
console.log('error connecting to MongoDB:', error.message)
})

//Mongodb schema
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
      type: String,
      required: true
  },
  id: {
    type: String,
    required: false
  }
})
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)