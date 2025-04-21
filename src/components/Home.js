import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
    <header className="hero">
      <h1>Welcome to Our Store!</h1>
      <p>Find the best products at the best prices.</p>
      <Link to="/store" className="btn btn-primary">Shop Now</Link>
    </header>
  </div>
  )
}

export default Home