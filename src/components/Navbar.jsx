import '../styles/Nav.css'
// import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
// import { Home } from '../components/Home'
// import { Contact } from '../components/Contact'
// import { Error } from '../components/Error'
// import { ServicesCard } from '../components/ServicesCard'
import { BurgerMenu } from './BurgerMenu'
import { useState } from 'react'

// function FaqSection() {
//   const [hasScrolled, setHasScrolled] = useState(false);
//   const faqSectionRef = useRef<HTMLElement>(null);
//   const { hash } = useLocation();

//   useEffect(() => {
//     if (faqSectionRef.current && hash === "#duvidas" && !hasScrolled) {
//     faqSectionRef.current.scrollIntoView({ behavior: "smooth", inline:'center', block: "center",}) 
//     setHasScrolled(true)
//     }

//     return () => {
//       setHasScrolled(false)
//     }

//     }, [faqSectionRef, hash])

//     return (

//     <section id="duvidas" ref={faqSectionRef}>
//       hi
//     </section>

//     )

// }



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
      

      {/* <Router> */}
        
        {/* Nav Links */}
        {/* <div className='nav-major-container'>

          <div className='logo-container'>
            <p>Logo h</p>
          </div>



          <nav className='nav-container'>
            <Link to='/' className='home-link'>Home</Link>
            <Link to='/contact' className='contact-link'>Contact</Link>
            <Link to='/services' className='services-link'>Services</Link>

          </nav>

        </div> */}

        {/* <Routes> */}
          {/* <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/> */}


          {/* Error Route */}
          {/* <Route path='*' element={<Error/>}/> */}
        {/* </Routes> */}

      {/* </Router>  */}

      
    </>

  )
}
