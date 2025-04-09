const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <>
      <p>
        {props.content.part} {props.content.exercises}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part content={props.parts[0]} />
      <Part content={props.parts[1]} />
      <Part content={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.totalExercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Fundamentals of React',
      exercises: 10
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
    </div>
  )
}


export default App