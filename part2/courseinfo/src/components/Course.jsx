const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => (
    <div>
        {props.parts.map(part => <Part key={part.id} part={part} />)}
    </div>
)

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)
const Total = (props) => {
    const total = props.parts.reduce((totalValue, currentValue) => totalValue + currentValue.exercises, 0)
    return (
        <p><b>total of {total} exercises</b></p>
    )
}

const Course = ({ courses }) => {
    return (
        <>
            {courses.map(course => 
                <div key={course.id}>
                    <Header course={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts}/>
                </div>
            )}
        </>
    )
}


export default Course