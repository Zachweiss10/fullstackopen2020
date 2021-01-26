const { response } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(morgan('combined'))
var jsonParser = bodyParser.json()

  let persons = [
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]

app.get('/', (request, response) => {
  response.send('<h1> Hello World!</h1>')
})

app.get('/info', (request, response) => {
  let count = 0
  let now = new Date(Date.now())
  persons.map(person => {
    count += 1
  })
  res = `<div>Phonebook has info for ${count} people<br><br>${now}</br></br><div/>`
  response.send(res)
})

app.get('/api/persons', (request, response) =>{
  response.json(persons)
})

app.post('/api/persons', jsonParser, (request, response) =>{
  const body = request.body
  console.log(body)
  if(!body.name || !body.number){
    return response.status(400).json({
      error: 'content missing'
    })
  }
  if(persons.filter(person => person.name === body.name).length > 0){
    return response.status(400).json({
      error: 'Name already exists'
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
  persons = persons.concat(person)
  response.json(person)

})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  if (person){
    response.json(person)
  }
  else{
    response.status(404).end()
  }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  if(persons.find(person => person.id === id)){
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
  }
  else{
    response.status(404).end()
  }
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
  return maxId + 1
}