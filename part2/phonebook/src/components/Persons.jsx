const Persons = ({array, deletePerson}) => {
    return (
        <div>
            {array.map((element) => (
                <div key={element.id}>
                    <span>{element.name} {element.number}</span>
                    <button onClick={() => deletePerson(element.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Persons