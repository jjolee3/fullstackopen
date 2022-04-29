import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const {good, neutral, bad, all, average, percent} = props
  const percentage = percent + "%"
  
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
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {all}/>
        <StatisticLine text = "average" value = {average}/>
        <StatisticLine text = "positive" value = {percentage}/> 
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <>
    <p>{props.text} {props.value}</p>
    </>
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
