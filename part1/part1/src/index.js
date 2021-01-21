import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';


const Hello = (props) => {
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created by <a href="https://github.com/Zachweiss10">Zachary Weiss</a>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10
  return (
  <>
    <h1>Greetings</h1>
    <Hello name="Zachary" age={26 + 10}/>
    <Hello name={name} age={age}/>
    <Footer/>
  </>
  )
  }

ReactDOM.render(<App />, document.getElementById('root'))
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
