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
const Statistic = ({stat, text}) => {
  console.log(stat)
  return(
    <p>{text} {stat}</p>
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

  if(!good && !bad && !neutral){
    return(
      <div>
      <Header title = {title}/>
      <Button onClick={ ()=> handleGoodClick()} text = {text[0]}/>
      <Button onClick={ ()=> handleNeutralClick()} text = {text[1]}/>
      <Button onClick={ ()=> handleBadClick()} text = {text[2]}/>
      <Header title = {stats}/>
      <p>No Feedback Given</p>
      </div>
    )
  }
  return (
    <div>
      <Header title = {title}/>
      <Button onClick={ ()=> handleGoodClick()} text = {text[0]}/>
      <Button onClick={ ()=> handleNeutralClick()} text = {text[1]}/>
      <Button onClick={ ()=> handleBadClick()} text = {text[2]}/>
      <Header title = {stats}/>
      <Statistic text = "Good" stat = {good}/>
      <Statistic text = "Neutral" stat = {neutral} />
      <Statistic text = "Bad" stat={bad}/>
      <Statistic text = "All" stat={good + bad + neutral}/>
      <Statistic text = "Average" stat = {good/ (good + bad)}/>
      <Statistic text = "Positive" stat = {(good/ (good + bad + neutral)) * 100 + '%'} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))