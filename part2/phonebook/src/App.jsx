import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notification, setNotification] = useState('Insert message here...')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()

    const isNameDuplicate = persons.find(person => person.name === newName.trim())

    if (isNameDuplicate) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)){
        const changePerson = {...isNameDuplicate, number: newNumber}
          personService
            .update(isNameDuplicate.id, changePerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
              setNewName('')
              setNewNumber('')
              setNotification({
                type: 'notice',
                text:`Changed number of ${returnedPerson.name}`
              })
              setTimeout(() => {
                setNotification(null)
              }, 5000)
            })
            .catch(error => {
              setNotification({
                type: 'error',
                text:`Information of ${isNameDuplicate.name} has already been removed from server`
              })
              setTimeout(() => {
                setNotification(null)
              }, 5000)
              setPersons(persons.filter(p => p.id !== isNameDuplicate.id))
            })
      }
    } else {
      const nameObject = {
        name: newName.trim(),
        number: newNumber.trim(),
      }

      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotification({
            type:'notice', 
            text: `Added ${returnedPerson.name}`
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
      }
  }

  const deletePerson = (id) => {
    const person = persons.find(p => p.id === id)

    if(window.confirm(`Do you want to delete ${person.name}`)) {
      personService
        .remove(id)
        .then(() => setPersons(persons.filter(p => p.id !== id)))
        .catch(error => {
          setNotification({
            type: 'error',
            text:`Information of ${person.name} has already been removed from server`
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== id))
        })
    } else {
      console.log(`${person.name} is not deleted`)
    }
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
      <Notification message={notification} />
      <Filter filterValue={newFilter} handleChangeFilter={handleChangeFilter}/>
      <h3>Add a new</h3>
      <PersonForm handleSubmit={addPerson} 
        valueName={newName} 
        handleNameChange={handleNameChange} 
        valueNumber={newNumber} 
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons array={showPersons} deletePerson={deletePerson}/>
    </div>
  )
}

export default App