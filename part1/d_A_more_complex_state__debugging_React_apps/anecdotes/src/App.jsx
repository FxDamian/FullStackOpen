import { useState } from 'react'

const Button = ({text,onClick}) =>{
  return (
    <button onClick = {onClick}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [anecdote, setAnecdote] = useState({
    selected:0, votes:[0,0,0,0,0,0,0,0],most:0
  })

  const handleRandom = () =>{
    const rand = Math.random()
    const num  = Math.floor(rand * anecdotes.length)
    setAnecdote({
      selected: num,
      votes: anecdote.votes,
      most: anecdote.most
    })
  }
  const handleVote = () =>{
    const copy ={...anecdote.votes}
    copy[anecdote.selected] ++
    let newmost =anecdote.most
    if(copy[anecdote.selected]>copy[newmost])newmost=anecdote.selected
    setAnecdote({
      selected: anecdote.selected,
      votes: copy,
      most:newmost
    })
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[anecdote.selected]}</p>
      <p>has {anecdote.votes[anecdote.selected]} votes</p>
      <Button text = {'vote'} onClick = {handleVote}/>
      <Button text = {'next anecdote'} onClick = {handleRandom}/>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[anecdote.most]}</p>
      <p>has {anecdote.votes[anecdote.most]} votes</p>
    </div>
  )
}

export default App