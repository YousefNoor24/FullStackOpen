const Filter = ({ filterValue, handleChangeFilter }) => {
    return (
        <div>
            find countries <input value={filterValue} onChange={handleChangeFilter}/>
        </div>
    )
}

export default Filter