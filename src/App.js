import './App.css'
import './styles/Nav.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from '../src/components/Home'
import { Contact } from '../src/components/Contact'
import { Error } from '../src/components/Error'

function App() {
  return (
    <>
    <Router>
      
      {/* Nav Links */}
      <div className='nav-major-container'>
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

export default App
