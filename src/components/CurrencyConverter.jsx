import "../styles/CurrencyConverter.css"
import { RequestPickup } from "./RequestPickup.jsx"
import { useState, useEffect } from "react"
import { Router } from "react-router-dom"

const toField = document.querySelector('#to-field')
const fromField = document.querySelector('#from-field')

const selectFromEl = document.querySelector('.from-select')

// from currencies
const fromUSD = document.querySelector('#from-USD')
const fromGHS = document.querySelector('#from-GHS')
const fromEURO = document.querySelector('#from-EURO')
const fromGBP = document.querySelector('#from-GBP')



// to currencies
const toUSD = document.querySelector('#to-USD')
const toGHS = document.querySelector('#to-GHS')
const toEURO = document.querySelector('#to-EURO')
const toGBP = document.querySelector('#to-GBP')


export const CurrencyConverter = () => {
    // API
    const convertCurrency = async() => {
        try {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/ghs') // GHS is the base currency
            const parsedData = await response.json()
            
            const API_RATES_OBJECT = parsedData['rates']
            const currencies = Object.keys(API_RATES_OBJECT)
            const currencyRates = Object.values(API_RATES_OBJECT)

            
            // GOAL: Converted the selected "from" currency to the "to" currency
            // get "from" selected currency in drop down list
            console.log(fromUSD)

            // get "to" selected currency in drop down list

            
            // take number from from-field and multiply with eRate of target currency
            // set to-field value to the variable above



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
                        <select name="" className="from-select" >
                            <option value="USD" id="from-USD">USD</option>
                            <option value="GHS" id="from-GHS">GHS</option>
                            <option value="EUR" id="from-EUR">EUR</option>
                            <option value="GBP" id="from-GBP">GBP</option>
                        </select>
                    </div>

                    <div className="rate-container">
                        <div className="rate">
                            {/* Exchange rate */}
                            <h6> 1 USD = 15.21 GHS</h6>
                        </div>
                    </div>
                </div>

                <div className="to-container">
                    <h3>To:</h3>

                    <div className="actual-converter">
                        <input type="number" className='number-field' id="to-field" disabled/>
                        <select name="" className="to-select">
                            <option value="USD" id="to-USD">USD</option>
                            <option value="GHS" id="to-GHS">GHS</option>
                            <option value="EUR" id="to-EUR">EUR</option>
                            <option value="GBP" id="to-GBP">GBP</option>
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
