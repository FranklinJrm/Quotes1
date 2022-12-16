import React from 'react'
import QuoteButton from './QuoteButton';

const QuoteBox = ({quote, getNewValues, backgroundNew, colorLetters}) => {

  console.log(quote);
  return (
    <article className='quoteBox'>

      <p style={colorLetters}>{quote.quote}</p> <br />

      <h4 style={colorLetters}>{quote.author}</h4>
      

      <section className='butons'>
        <QuoteButton getNewValues={getNewValues} backgroundNew = {backgroundNew}/>
        <i style={colorLetters} className='bx bxs-quote-left'></i>
      </section>
        
    </article>
  )
}

export default QuoteBox