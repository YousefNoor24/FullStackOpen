const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const partExercises = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}

  ]

  return (
    <div>
      <Header course={course}/>
      <Content part={partExercises[0].part} exercises={partExercises[0].exercises} />
      <Content part={partExercises[1].part} exercises={partExercises[1].exercises} />
      <Content part={partExercises[2].part} exercises={partExercises[2].exercises} />
    </div>
  )
}


export default App