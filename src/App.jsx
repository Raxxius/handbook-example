import './App.css'
import { useState } from 'react'
import QuoteComponent from './components/QuoteComponent/QuoteComponent'
import CounterColourComponent from './components/CounterColourComponent/CounterColourComponent'

function App() {
  // State
  const colours = ["red", "blue", "green", "yellow", "orange"]
  const [colourIndex, setColourIndex] = useState(0)
  const colour = colours[colourIndex]

  // State functions

  const changeColour = (direction) => {
    setColourIndex((prevIndex) => (prevIndex + direction + colours.length) % colours.length);
  }

  return (
    <>
      <div>Baw Medical Example React App</div>
      <QuoteComponent 
        colour={colour}
      />
      <CounterColourComponent 
        changeColour={changeColour}
      />
    </>
  )
}

export default App
