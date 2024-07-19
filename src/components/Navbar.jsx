import '../styles/Nav.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import { Home } from '../components/Home'
// import { Contact } from '../components/Contact'
// import { Error } from '../components/Error'
// import { ServicesCard } from '../components/ServicesCard'
import { BurgerMenu } from './BurgerMenu'
import { useState } from 'react'


export const Navbar = () => {
  const [burgerMenu, setBurgerMenu] = useState(false)

  const toggleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu)
  }

  return (
    <>  

      <div className="burger-menu-container" onClick={toggleBurgerMenu}>
        
        <BurgerMenu/>
      </div>
      

      <Router>
        
        {/* Nav Links */}
        <div className='nav-major-container'>

          <div className='logo-container'>
            <p>Logo h</p>
          </div>


          {/* <nav className='nav-container'>
            <Link to='/' className='home-link'>Home</Link>
            <Link to='/contact' className='contact-link'>Contact</Link>
            <Link to='/services' className='services-link'>Services</Link>
          </nav> */}

        </div>

        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/> */}
          {/* <Route path='/services' element={<Services/>}/> */}


          {/* Error Route */}
          {/* <Route path='*' element={<Error/>}/>
        </Routes> */}

      </Router> 

      
    </>

  )
}
