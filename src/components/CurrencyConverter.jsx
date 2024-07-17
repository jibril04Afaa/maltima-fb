import "../styles/CurrencyConverter.css"
import { RequestPickup } from "./RequestPickup.jsx"
import { useState } from "react"
import { Router, Navigate, useNavigate, Routes, Route } from "react-router-dom"

export const CurrencyConverter = () => {
    const navigate = useNavigate()
    // API
    const fetchRates = async() => {
        try {
            const data = await fetch('https://data.fixer.io/api/latest')
            const parsedData = data.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }

    }

    const [clicked, setClicked] = useState(false)
    const redirectClick = () => {
        // setClicked(true)
        navigate('/request-pickup')
    }

  return (
    <>
        <Router>
            <h1 className='currencytitle'>Currency Converter</h1>
    
            <div className="currency-component-wrapper">
                <div className='converter-container'>
                    <div className="from-container">
                        <h3>From:</h3>

                        <div className="actual-converter">
                            <input type="number" className='number-field' />
                            <select name="" >
                                <option value="USD">USD</option>
                                <option value="GHS">GHS</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="USD">USD</option>
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
                            <input type="number" className='number-field' disabled />
                            <select name="" >
                                <option value="USD">USD</option>
                                <option value="GHS">GHS</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>

                        <div className="rate-container">
                            <div className="rate">
                                <h6> 1 GHS = 0.0657 USD</h6>
                            </div>
                        </div>
                    </div>

                    <div className="btn-container">
                        <button className='convert-btn' onClick={fetchRates} >Convert</button>
                    </div>

                    
                </div>
            </div>


            
            <div className="request-container">
                {/* Redirect to RequestPickup.jsx when clicked */}
                <button className='request-pickup-btn' onClick={redirectClick}>
                    Request pickup
                </button>
            
                {/* route for pickup request */}
                <Routes>
                    {/* <Route path="/redirect"
                     element={clicked ? <Navigate to="/request-pickup"/> : <p>no pickup request</p> }
                     /> */}

                     <Route path="/request-pickup" element={<RequestPickup/>}/>
                </Routes>
            </div>

        </Router>
    </>
    




  )
}
