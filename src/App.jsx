
import './App.css'
import QuoteButton from './components/QuoteButton';
import quoteDB from "./db/quotes.json"
import colors from './db/colors.js';
import { useState } from 'react';
import QuoteBox from './components/QuoteBox';

function App() {

  const getRandom = (array) => {
    const randomIndex = Math.floor(array.length * Math.random())
    return array[randomIndex]

  }
  // Estado almacenar y obtener item aleatorio
  const [quote, setquote] = useState(getRandom(quoteDB))
  //Estado para almacenar colores aleatorios
  const [color, setcolor] = useState(getRandom(colors))

  const getNewValues = () => {
    const newQuote = getRandom(quoteDB) 
    const newColor = getRandom(colors)
    setquote(newQuote)
    setcolor(newColor)

  }
  
  const backgroundNew = {
    backgroundColor: color
  }

  const colorLetters = {
    color : color
  }

  return (
    <div className="App" style={backgroundNew} >

      <QuoteBox 
      quote= {quote} 
      getNewValues= {getNewValues} 
      backgroundNew = {backgroundNew}
      colorLetters = {colorLetters}

      />

    </div>
  )
}

export default App
