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

export default Countries