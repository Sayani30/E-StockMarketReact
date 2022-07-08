import React from 'react'
import Demo from '../components/Demo'
import Navbar from '../components/Navbar'
import StockDate from '../components/StockDate'
import Logo from '../components/Logo'
import ErrorBoundary from '../components/ErrorBoundary'

const Home = () => {
  return (
    <div>
      <ErrorBoundary>
      <Logo/>
      </ErrorBoundary>
      <Navbar/>
       <StockDate/> 
      {/* <Demo/> */}
    </div>
  )
}

export default Home
