import React from 'react'
import PropTypes from 'prop-types'

//bank's operations
function buying(amount, rate = 0.75) {
  return amount * rate
}
function selling(amount, rate = 1.85) {
  return amount * rate
}

function convert(amount, operation) {
  const input = parseFloat(amount)
  if(Number.isNaN(input)) {
    return ''
  }
  const output = operation(amount)
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString()
}

export const Convertation = ({ 
  amount1, amount2, 
  currency1, currency2,
  deal, changeDealSum, 
  render 
}) => {

  const pair = `${currency1}${currency2}`
  //request currency rates

  let value1 = ''
  let value2 = ''

  //I want to sell or buy
  if (deal === 'sell') {
    value1 = amount1
    value2 = convert(amount1, buying)
    changeDealSum(value2)

  } else if (deal === 'buy') {
    value2 = amount2
    value1 = convert(amount2, selling)
    changeDealSum(value1)
  }

  return (

    render({ value1, value2 })

  )
}

Convertation.propTypes = {
  amount1: PropTypes.string,
  amount2: PropTypes.string,
  currency1: PropTypes.string,
  currency2: PropTypes.string,
  deal: PropTypes.string,
  changeDealSum: PropTypes.func.isRequired,

  render: PropTypes.func.isRequired,
}