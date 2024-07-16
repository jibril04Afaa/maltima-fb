import '../styles/Home.css'

export const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home-title'>We buy,we sell</h1>

      <p className='home-text'>
        Exchanging currency has never been easier! 
        Visit us to exchange in <strong>USD</strong>, 
        <strong>GBP</strong>, <strong>EURO</strong>
         & more!
      </p>

      <div className="btn-container">
        <button className='get-started'>
          Get Started
        </button>
      </div>


    </div>
  )
}
