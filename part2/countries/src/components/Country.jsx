import Weather from "./Weather"

const Country = ({country}) => {
    const keyLanguages = Object.keys(country.languages)

    return (
        <div>
        <h1>{country.name.common}</h1>
        <div>Capital {country.capital}</div>
        <div>Area {country.area}</div>
        <h2>Languages</h2>
        <ul>
            {keyLanguages.map(key => (
            <li key={key}>{country.languages[key]}</li>
            ))}
        </ul>
        <img src={country.flags.png} />
        <Weather name={country.capital[0]} latitude={country.latlng[0]} longitude={country.latlng[1]}/>
        </div>
    )
}

export default Country