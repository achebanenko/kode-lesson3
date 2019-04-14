import React from 'react'

function buying(amount) {
  return 0.85 * amount
}
function selling(amount) {
  return 1.25 * amount
}

function convert(amount, operation) {
  const input = parseFloat(amount)
  if(Number.isNaN(input)) {
    return ''
  }
  const output = operation(input)
  const rounded = Math.round(output * 100) / 100;
  return rounded.toString()
}

export const Convertation = ({ amount1, amount2, deal, render }) => {
  let value1 = ''
  let value2 = ''

  if (deal === 'sell') {
    value1 = amount1 
    value2 = convert(amount1, buying)
  } else if (deal === 'buy') {
    value2 = amount2
    value1 = convert(amount2, selling)
  }
  
  return render({ value1, value2 })
}