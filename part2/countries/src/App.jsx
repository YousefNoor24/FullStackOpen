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

  const Countries = ({countries}) => {
    return (
      <div>
        {countries.map(country => (
          <div key={country.name.common}>
            {country.name.common}
          </div>
        ))}
      </div>
    )  
  }

  const Country = ({country}) => {
    const keyLanguages = Object.keys(country.languages)
    console.log(keyLanguages)
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

  const Content = ({array}) => {
    if (array.length > 10) {
      return (
        <div>Too many matches,specify another filter</div>
      )
    }

    if (array.length > 1 && array.length <= 10) {
      return (
        <Countries countries={array} />
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

  return (
    <div>
      <Filter filterValue={newFilter} handleChangeFilter={handleChangeFilter}/>
      <Content array={showCountries} />
    </div>
  )
}

export default App