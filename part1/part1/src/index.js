import {React, useState} from 'react'
import ReactDOM from 'react-dom'


const Header = ({title}) =>{
  return(
    <>
    <h1>{title}</h1>
    </>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const Good = ({good}) => {
  console.log(good)
  return(
    <p>Good {good}</p>
  )
}
const Neutral = ({neutral}) => {
  console.log(neutral)
  return(
    <p>Neutral {neutral}</p>
  )
}
const Bad = ({bad}) => {
  console.log(bad)
  return(
    <p>Bad {bad}</p>
  )
}

const App = () => {
  const title = 'Give Feedback'
  const stats = 'Statistics'
  const text = ['Good', 'Neutral', 'Bad']
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
      <Header title = {title}/>
      <Button onClick={ ()=> handleGoodClick()} text = {text[0]}/>
      <Button onClick={ ()=> handleNeutralClick()} text = {text[1]}/>
      <Button onClick={ ()=> handleBadClick()} text = {text[2]}/>
      <Header title = {stats}/>
      <Good good = {good}/>
      <Neutral neutral = {neutral} />
      <Bad bad={bad}/>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))