import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const isNameDuplicate = persons.find(person => person.name === newName.trim())
    if (isNameDuplicate) return alert(`${newName} is already added to phonebook`)

    const nameObject = {
      name: newName.trim(),
      number: newNumber.trim(),
      id: String(persons.length + 1)
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const filteredPersons = () => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(newFilter.toLowerCase().trim())
    );
  };

  const showPersons = newFilter.trim().length === 0 ? persons : filteredPersons();


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={newFilter} handleChangeFilter={handleChangeFilter}/>
      <h3>Add a new</h3>
      <PersonForm handleSubmit={addPerson} 
        valueName={newName} 
        handleNameChange={handleNameChange} 
        valueNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons array={showPersons}/>
    </div>
  )
}

export default App