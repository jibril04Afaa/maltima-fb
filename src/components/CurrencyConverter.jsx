import "../styles/CurrencyConverter.css"
import { RequestPickup } from "./RequestPickup.jsx"
import { useState, useEffect } from "react"
import { Router } from "react-router-dom"

const toField = document.querySelector('.to-field')
const fromField = document.querySelector('.from-field')

const selectFromEl = document.querySelector('.from-select')
const fromUSD = document.querySelector('#USD')


export const CurrencyConverter = () => {
    // API
    const convertCurrency = async() => {
        try {
            const data = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_clVUQQecPGeX7P34kbBEfvEjGjrdVUpXvRhsR86c')
            const parsedData = await data.json()

            for (let eachCurrency in parsedData) {
                // an object of conversion rates from USD to other currencies
                let ratesObject = parsedData[eachCurrency]
                // get the key of ratesObject
                let keys = Object.keys(ratesObject)
                let values = Object.values(ratesObject)

                // 1 - USD -> EUR
                // take number from to-field and multiply with eRate of eur

            }

        } catch (error) {
            console.error(error)
        }

    }

    const handleChange = (event) => {
        // inner value of <option> element
        console.log(event.target.value)
    }

    const [clicked, setClicked] = useState(false)
    const redirectClick = () => {
        setClicked(true)
    }

  return (
    <>
        <h1 className='currencytitle'>Currency Converter</h1>

        <div className="currency-component-wrapper">
            <div className='converter-container'>
                <div className="from-container">
                    <h3>From:</h3>

                    <div className="actual-converter">
                        <input type="number" className='number-field' id="from-field" />
                        <select name="" className="from-select" onChange={handleChange} >
                            <option value="USD" id="USD">USD</option>
                            <option value="GHS" id="GHS">GHS</option>
                            <option value="EUR" id="EUR">EUR</option>
                            <option value="GBP" id="EUR">EUR</option>
                        </select>
                    </div>

                    <div className="rate-container">
                        <div className="rate">
                            <h6> 1 USD = 15.21 GHS</h6>
                        </div>
                    </div>
                </div>

                <div className="to-container">
                    <h3>To:</h3>

                    <div className="actual-converter">
                        <input type="number" className='number-field' id="to-field" disabled/>
                        <select name="" className="to-select">
                            <option value="USD" id="USD">USD</option>
                            <option value="GHS" id="GHS">GHS</option>
                            <option value="EUR" id="EUR">EUR</option>
                            <option value="GBP" id="EUR">EUR</option>
                        </select>
                    </div>

                    <div className="rate-container">
                        <div className="rate">
                            <h6> 1 GHS = 0.0657 USD</h6>
                        </div>
                    </div>
                </div>

                <div className="btn-container">
                    <button className='convert-btn' onClick={convertCurrency} >Convert</button>
                </div>

                
            </div>
        </div>


        
        <div className="request-container">
            {/* Redirect to RequestPickup.jsx when clicked */}
            <button className='request-pickup-btn'>
                Request pickup
            </button>
        
            {/* route for pickup request */}

        </div>
    </>
    




  )
}
