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
      <Part content={props.partExercises[0]} />
      <Part content={props.partExercises[1]} />
      <Part content={props.partExercises[2]} />
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
  const partExercises = [
    { part: 'Fundamentals of React', exercises: 10},
    { part: 'Using props to pass data', exercises: 7},
    { part: 'State of a component', exercises: 14}

  ]

  return (
    <div>
      <Header course={course}/>
      <Content partExercises={partExercises} />
      <Total totalExercises={partExercises[0].exercises + partExercises[1].exercises + partExercises[2].exercises} />
    </div>
  )
}


export default App