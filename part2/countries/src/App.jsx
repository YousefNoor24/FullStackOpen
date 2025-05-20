import { useState, useEffect } from 'react'
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

  const Countries = ({ countries, selectCountry }) => {
    return (
      <div>
        {countries.map(country => (
          <div key={country.name.common}>
            <span>{country.name.common}</span>
            <button onClick={() => selectCountry(country)}>Show</button>
          </div>
        ))}
      </div>
    )  
  }

  const Country = ({country}) => {
    const keyLanguages = Object.keys(country.languages)

    return (
      <div>
        <h2>{country.name.common}</h2>
        <div>Capital {country.capital}</div>
        <div>Area {country.area}</div>
        <h2>Languages</h2>
        <ul>
          {keyLanguages.map(key => (
            <li key={key}>{country.languages[key]}</li>
          ))}
        </ul>
        <img src={country.flags.png} />
      </div>
    )
  }

  const Content = ({array, selectCountry}) => {
    if (array.length > 10) {
      return (
        <div>Too many matches,specify another filter</div>
      )
    }

    if (array.length > 1 && array.length <= 10) {
      return (
        <Countries countries={array} selectCountry={selectCountry}/>
      )
    }

    if (array.length === 1) {
      return (
        <Country country={array[0]} />
      )
    }

    return (
      <div>
        No Matches Found
      </div>
    )

  }

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