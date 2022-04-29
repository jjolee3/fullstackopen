import { useState } from 'react'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}> {props.text} </button>
    </>
  )
}

const Mostvotes = (props) => {
  const anecdotes = props.anecdotes
  const points = props.points

  const maxPoints = Math.max(...points)
  const maxPointsIndex = points.indexOf(maxPoints)
  const bestAnecdote = anecdotes[maxPointsIndex]

  return(
    <div>
      <p>{bestAnecdote}</p>
      <p>has {maxPoints} votes</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const increment = () =>{
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <h1> Anecdote of the Day </h1>

      {anecdotes[selected]}
      <div>
        <p>
          has {points[selected]} votes
        </p>
      </div>
      <div> 
        <Button handleClick = {() => setSelected(getRandomInt(anecdotes.length))} text = "next anecdote" />
        <Button handleClick = {increment} text = "vote" />
      </div>
    
      <h1>Anecdote with most votes</h1>
        <Mostvotes anecdotes = {anecdotes} points = {points} />
    </div>
  )
}

export default App