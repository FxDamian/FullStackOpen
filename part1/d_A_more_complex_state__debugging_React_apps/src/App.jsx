import { useState } from "react";

const Button = ({onClick,text}) =>{
  return <button onClick={onClick}>{text}</button>
}
const StatisticsLine = ({text,value}) =>{
  return(
    <>
    <p>{text} {value}</p>
    </>
  )
}
const Statistics = ({good,neutral,bad,all,average,positive}) =>{
  if(all>0){
    return(
      <>
        <StatisticsLine text={'good'} value = {good} />
        <StatisticsLine text={'neutral'} value = {neutral} />
        <StatisticsLine text={'bad'} value = {bad} />
        <StatisticsLine text={'all'} value = {all} />
        <StatisticsLine text={'average'} value = {average} />
        <StatisticsLine text={'positive %'} value ={positive}/>
      </>
    )
  }else{
    return <h2>No feedback given</h2>
  }
}
const App = () =>{
  const [statistics,setStatistics] = useState({
    good:0,neutral:0,bad:0,all:0,average:0,positive:0,total:0,allpositive:0
  }) 
  const handleStatistics = (feedback) =>{
      let x=0, y = 0
      let all2 = statistics.all
      let total2 = statistics.total
      let allpositive2 = statistics.allpositive
      if(feedback=='good'){
        x=1
        y=1
      }
      else if(feedback == 'bad')x= -1
      return () =>setStatistics({
        ...statistics,
        [feedback]: statistics[feedback]+ 1,
        total: total2 + x, 
        all: all2 + 1,
        average: (total2 + x) / (all2 + 1),
        positive: ((allpositive2 + y)*100)/ (all2 + 1),
        allpositive: allpositive2 + y
      })
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleStatistics('good')} text = {'good'}/>
      <Button onClick={handleStatistics('neutral')} text = {'neutral'}/>
      <Button onClick={handleStatistics('bad')} text = {'bad'}/>
      <h1>statistics</h1>
      <Statistics 
        good ={statistics.good} 
        neutral = {statistics.neutral} 
        bad ={statistics.bad}
        all = {statistics.all}
        average = {statistics.average}
        positive = {statistics.positive}
        />
    </div>
  )
}
export default App