const PersonForm = ({handleSubmit, valueName, handleNameChange, valueNumber, handleNumberChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input value={valueName} onChange={handleNameChange}/>
            </div>
            <div>
                number: <input value={valueNumber} onChange={handleNumberChange}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm