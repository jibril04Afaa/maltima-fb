import '../styles/Nav.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Error } from '../components/Error'


export const Navbar = () => {
  return (
    <>
    <Router>
      
      {/* Nav Links */}
      <div className='nav-major-container'>

        <div className='logo-container'>
          <p>Logo h</p>
        </div>



        <nav className='nav-container'>
          <Link to='/' className='home-link'>Home</Link>
          <Link to='/contact' className='contact-link'>Contact</Link>
        </nav>

      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>


        {/* Error Route */}
        <Route path='*' element={<Error/>}/>
      </Routes>

    </Router>
    </>

  )
}
