import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState([])

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
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const filterPersons = (event) => {
    setNewFilter(persons.filter(person => person.name.toLowerCase().trim().includes(event.target.value.toLowerCase().trim())))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input onChange={filterPersons}/>
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {newFilter.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App