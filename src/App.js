import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNewPerson = (event) => {
      
   event.preventDefault()
      const personObject = {
        name: newName
      }
    
    console.log('personObject',personObject)
    setPersons(persons.concat(personObject))
    setNewName('')

  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button 
          type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><li>{person.name}</li>)}
    </div>
  )
}

export default App