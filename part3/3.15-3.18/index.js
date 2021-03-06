require('dotenv').config()
const express = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')
app.use(cors())
app.use(morgan('combined'))
app.use(express.static('build'))
app.use(express.json())
const jsonParser = bodyParser.json()

const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  if(error.name === 'CastError'){
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError'){
    return response.status(400).json({error: error.message})
  }
  next(error)
}
app.use(errorHandler)

app.get('/', (request, response) => {
  response.send('<h1> Hello World!</h1>')
})

app.get('/info', (request, response) => {
  let count = 0
  let now = new Date(Date.now())
  Person
    .find({})
    .then(result => {
      result.map(() =>{
        count += 1
      })
      res = `<div>Phonebook has info for ${count} people<br><br>${now}</br></br><div/>`
      response.send(res)
    })
})

app.get('/api/persons', (request, response) =>{
  Person
    .find({})
    .then(result => {
      console.log(result)
      response.json(result)
    }).catch( error => console.log(error))  
})



app.post('/api/persons', jsonParser, (request, response, next) =>{
  const body = request.body
  console.log(body)
  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'content missing'
    })
  }
  Person
    .find({})
    .then(result => {
      persons = result
  if(persons.filter(person => person.name === body.name).length > 0){
    return response.status(400).json({
      error: 'Name already exists'
    })
  }
  const person = new Person({
    name: body.name,
    number: body.number,
    id: generateId(),
  })
  person
    .save()
    .then(savedPerson =>{
      response.json(savedPerson)
  }).catch(error => next(error))
  }) 
})

app.get('/api/persons/:id', (request, response) => {
  const pid = String(request.params.id)
  Person
    .find({"_id":pid})
    .then(result => {
      console.log(result)
      const person = result
  if (person){
    response.json(person)
  }
  else{
    response.status(404).end()
  }
  }).catch(error => next(error))
})


app.delete('/api/persons/:id', (request, response) => {
  const id = String(request.params.id)
  Person
    .findOneAndDelete({"_id":id})
    .then( result => {
      console.log(result)
      const person = result
    if(person){
      response.status(204).end()
    }
    else{
      response.status(404).end()
    }
})
})

const unknownEndpoint = (request,response) => {
  response.status(404).send({error: 'unknown endpoint'})
}
app.use(unknownEndpoint)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
  return maxId + 1
}