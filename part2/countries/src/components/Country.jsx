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

export default Country