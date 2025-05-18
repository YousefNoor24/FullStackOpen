const Filter = ({ filterValue, handleChangeFilter }) => {
    return (
        <div>
            filter shown with <input value={filterValue} onChange={handleChangeFilter}/>
        </div>
    )
}

export default Filter