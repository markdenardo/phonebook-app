import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
     { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ findPerson, setFindPerson ] = useState('')
  const [ displayList, setDisplayList] = useState('')

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
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    // console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    // console.log('52',event.target.value)
    setFindPerson(event.target.value)
  }

 const searchPersons = (event) => {
    
    event.preventDefault()
    // console.log('58',findPerson)
    let filterName = persons.filter(e=>e.name===findPerson)
    setDisplayList(filterName)
    console.log(displayList)
    
 }


  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={searchPersons}>
        <div>
          Find A Person in the Phonebook
          <input value={findPerson} onChange={handleSearchName}/>
        </div>
        <button type="submit">Search</button>
      </form>

      <form onSubmit={addNewPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <button type="submit">add</button>
        <div>
        
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><li key={person.id}>{person.name} {person.number}</li>)}
      
      {/* {displayList} */}
    </div>
  )
}

export default App