import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import Header from './components/Header'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, filterChange] = useState('')

  useEffect(() => {
      console.log('effect')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log(response)
          setPersons(response.data)
        })
    }, [])


  const personsToShow = showAll ?
    persons : persons.filter(person => person.name === filter)

  const addPerson = (person) => {
    if(persons.some( ({name}) => name === person.name)){
      //console.log('EXISTS!')
      alert(`${person.name} already exists`)
    }
    else if(person.name === '' || person.number === ''){
      alert('Please enter a valid person')
    }
    else{
      //console.log("NOT EXISTS!~")
      setPersons(persons.concat(person))   
    }
  }

  const addName = (event) => {
    event.preventDefault()
    //console.log(newName)
    const person = {
      name : newName,
      number : newNumber
    }
    addPerson(person)
  }

  const handleChange = (event) =>{
    //console.log({name: event.target.value})
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) =>{
    if(event.target.value === ''){
      setShowAll(true)
      filterChange(event.target.value)
    }
    else{
      setShowAll(false)
      //console.log(event.target.value)
      filterChange(event.target.value)
    }
    
  }

  return (
    <>
      <Header title = 'Phonebook'/>
      <Filter filter={filter} filterChange = {handleFilterChange}/>
      <Form addName = {addName} newName = {newName} newNumber = {newNumber} handleNumberChange={handleNumberChange} handleChange={handleChange}/>
      <Header title = 'Numbers' />
      <Persons personsToShow = {personsToShow}/>
    </>
  )
}

export default App