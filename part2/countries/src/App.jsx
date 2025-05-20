import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleChangeFilter = (event) => {
    setFilterCountries(event.target.value)
  }

  return (
    <div>
      <Filter filterValue={filterCountries} handleChangeFilter={handleChangeFilter}/>
    </div>
  )
}

export default App