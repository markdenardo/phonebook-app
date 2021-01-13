import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { id: 0, name: 'Arto Hellas', number: 7188888888 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const addNewPerson = (event) => {
    
    event.preventDefault()

      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber
      }
      
      console.log(personObject)

      if (newName === ''){
        alert('please enter a Name')
      }
      else if (persons.some(person => person.name === personObject.name)) {
        alert(`${newName} is already added to phonebook`)
      } 
      else {
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button 
          type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><li key={person.id}>{person.name} {person.number}</li>)}
    </div>
  )
}

export default App