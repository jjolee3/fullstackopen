import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const {good, neutral, bad, all, average, percent} = props

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given </p>
      </div>
    )
  }
  return (
    <div>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {percent} %</p>  
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad)/(good + bad + neutral)
  const percent = good/(good + neutral + bad)


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text = "good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text = "bad"/>
      
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all} average = {average} percent = {percent} />
    </div>
    
  )
}


export default App
