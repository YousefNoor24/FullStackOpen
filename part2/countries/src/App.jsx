import { useState, useEffect } from 'react'
import Content from './components/Content'
import Filter from './components/Filter'
import countriesService from './services/countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleChangeFilter = (event) => {
    setNewFilter(event.target.value)
  }

  const filteredCountries = () => {
    return countries.filter(country =>
      country.name.common.toLowerCase().includes(newFilter.toLowerCase().trim())
    )
  }

  const showCountries = newFilter.trim().length === 0 ? countries : filteredCountries();

  const selectCountry = (country) => {
    console.log(country.name.common)
    setNewFilter(country.name.common)
  }

  return (
    <div>
      <Filter filterValue={newFilter} handleChangeFilter={handleChangeFilter}/>
      <Content array={showCountries} selectCountry={selectCountry} />
    </div>
  )
}

export default App