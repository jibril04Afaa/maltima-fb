import './App.css'
import './styles/CurrencyConverter.css'

import { CurrencyConverter } from '../src/components/CurrencyConverter'
import { Navbar } from '../src/components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <CurrencyConverter className='currency-converter-component'/>
    </>

  )
}

export default App
