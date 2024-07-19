import './App.css'
import './styles/CurrencyConverter.css'
import CurrencyImg from './img/cur-exchange.jpg'
import CurrencyInStore from './img/cur-change-in-store.jpg' 


import { CurrencyConverter } from '../src/components/CurrencyConverter'
import { Navbar } from '../src/components/Navbar'
import { Home } from '../src/components/Home'
import { ServicesCard } from '../src/components/ServicesCard'


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <CurrencyConverter className='currency-converter-component'/>

      <h1 className='services-title'>Services</h1>

      <div className='services-container'>
        <ServicesCard
        image = {CurrencyImg}
        serviceName = "Currency Converter"
        serviceDesc = "An online currency converter tool which converts to and from 10 currencies"
        />

        <ServicesCard
        image = {CurrencyInStore}
        serviceName = "Currency Exhange"
        serviceDesc = "Come with your currency to exchange in person at Maltima Forex Bureau"
        />
      </div>
      
    </>

  )
}

export default App
