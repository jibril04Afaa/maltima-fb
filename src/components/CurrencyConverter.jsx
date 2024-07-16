import "../styles/CurrencyConverter.css"

export const CurrencyConverter = () => {

    // API
    // const fetchRates = async() => {

    // }

  return (
    <>
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
                    <button className='convert-btn'>Convert</button>
                </div>

                
            </div>
        </div>


        <div className="request-container">
            <button className='request-pickup-btn'>
                Request pickup
            </button>
        </div>
    </>


  )
}
