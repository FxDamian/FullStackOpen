const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}
const Header = (props) => {
    return( 
        <h1>{props.course}</h1>
    )
}
const Content = (props) =>{
    return(
        <div>
            <Part name ={props.parts[0]} exercises={props.exercises[0]}/>
            <Part name ={props.parts[1]} exercises={props.exercises[1]}/>
            <Part name ={props.parts[2]} exercises={props.exercises[2]}/>
        </div>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
    name: 'Fundamentals of React',
    exercises:10
    },
    {
    name: 'Using props to pass data',
    exercises:7
    },
    {
    name: 'State of a component',
    exercises:14
    }
  ]
  return (
    <div>
      <Header course={course}/>
      <Content parts={[] =parts.map(part => part.name)} exercises={[] = parts.map(part => part.exercises)}/>
      <Total exercises = {[] = parts.map(part => part.exercises)}/>
    </div>
  )
}

export default App