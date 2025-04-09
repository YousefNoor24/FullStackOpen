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
        {props.content.name} {props.content.exercises}
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
  let total = 0
  props.parts.map(part => {
    total += part.exercises
  })
  return (
    <>
      <p>Number of exercises {total}</p>
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
      <Total parts={parts} />
    </div>
  )
}


export default App