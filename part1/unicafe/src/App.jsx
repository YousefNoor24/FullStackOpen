import { useState } from 'react'

const HeaderTwo = ({text}) => <h2>{text}</h2>

const StatisticsLine = ({text, value}) => 
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad)/all
  const positive = (good / all) * 100

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticsLine text='good' value={good}/>
        <StatisticsLine text='neutral' value={neutral}/>
        <StatisticsLine text='bad' value={bad}/>
        <StatisticsLine text='all' value={all}/>
        <StatisticsLine text='average' value={average}/>
        <StatisticsLine text='positive' value={positive + '%'} />
      </tbody>
    </table>
  )
}

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <HeaderTwo text='give feedback' />
      <Button onClick={handleGoodClick} text='good'/>
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <HeaderTwo text='statistics'/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App