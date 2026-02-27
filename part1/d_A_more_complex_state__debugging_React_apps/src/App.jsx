import { useState } from "react";

const Button = ({onClick,text}) =>{
  return <button onClick={onClick}>{text}</button>
}
const Content = ({good,neutral,bad}) =>{
  return(
    <>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </>
  )
}
const App = () =>{
  const [statistics,setStatistics] = useState({
    good:0,neutral:0,bad:0
  }) 
  const handleStatistics = (feedback) =>{
      return () =>setStatistics({
        ...statistics,
        [feedback]: statistics[feedback]+ 1
      })
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleStatistics('good')} text = {'good'}/>
      <Button onClick={handleStatistics('neutral')} text = {'neutral'}/>
      <Button onClick={handleStatistics('bad')} text = {'bad'}/>
      <h1>statistics</h1>
      <Content good ={statistics.good} neutral = {statistics.neutral} bad ={statistics.bad}/>
    </div>
  )
}
export default App