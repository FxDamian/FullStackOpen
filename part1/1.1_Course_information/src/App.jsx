const Header = (props) => {
    return( 
        <h1>{props.course}</h1>
    )
}
const Content = (props) =>{
    return(
        <div>
            <p>
                {props.parts[1]} {props.exercises[1]}
            </p>
            <p>
                {props.parts[2]} {props.exercises[2]}
            </p>
            <p>
                {props.parts[3]} {props.exercises[3]}
            </p>
        </div>
    )
}

const Total = (props) => {
    return(
        <p>Number of exercises {props.exercises[1] + props.exercises[2] + props.exercises[3]}</p>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['','Fundamentals of React','Using props to pass data','State of a component']
  const exercises = [0,10,7,14]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} exercises={exercises}/>
      <Total exercises = {exercises}/>
    </div>
  )
}

export default App