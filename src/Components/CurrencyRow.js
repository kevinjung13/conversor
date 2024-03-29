import React from 'react'

export default function CurrencyRow(props) {

{/* props used for Currency Rows */} 
const { currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount
} = props

  return (
    <>  
      {/* Container */}
      <div> 

        {/* Input Box */} 
        <input
          type="number"
          className="input"
          value={amount}
          onChange={onChangeAmount} />
      
        {/* Currency Selector Box */} 
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>))}
        </select>

      </div>
    </>
  )
}