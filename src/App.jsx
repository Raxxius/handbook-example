import './App.css'
import { useState } from 'react'
import QuoteComponent from './components/QuoteComponent'
import CounterColourComponent from './components/CounterColourComponent'

function App() {
  // State
  const colours = ["red", "blue", "green", "yellow", "orange"]
  const [colour, setColour] = useState(colours[0])

  return (
    <>
      <div>Baw Medical Example React App</div>
      <QuoteComponent />
      <CounterColourComponent />
    </>
  )
}

export default App
