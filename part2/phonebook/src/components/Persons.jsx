const Persons = ({array}) => {
    return (
        <div>
            {array.map((element) => (
                <div key={element.id}>
                    {element.name} {element.number}
                </div>
            ))}
        </div>
    )
}

export default Persons