import Countries from './Countries'
import Country from './Country'

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

export default Content