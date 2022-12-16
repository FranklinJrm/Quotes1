import React from 'react'

const QuoteButton = ({getNewValues, backgroundNew}) => {
  return (

    <button onClick={getNewValues} style = {backgroundNew} >

     <i className='bx bx-chevron-right'></i>

    </button>
  )
}

export default QuoteButton