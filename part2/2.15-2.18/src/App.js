import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import Header from './components/Header'
import personService from './services/personService'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, filterChange] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
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
      //setPersons(persons.concat(person))  
      setNewName('')
      setNewNumber('')
      personService
        .create(person)
        .then(response => {
          setPersons(persons.concat(response.data))
          console.log(persons);
        })
        

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

  const deletePerson = (person) => {
    const val = window.confirm(`Delete ${person.name}`);
    if(val){
    personService
      .deleteP(person.id)
      .then(response => {
        console.log(response.data)
      })
      const array = [...persons]
        console.log(array)
        array.splice(person.id-1, person.id)
        console.log(array)
      setPersons(array)
      
    }
    else{
      //alert(`${person.name} was not deleted`)
    }
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
      <Persons personsToShow = {personsToShow} deletePerson={deletePerson}/>
    </>
  )
}

export default App