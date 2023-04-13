import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import HomePage from '../pages/homePage/HomePage'

const MainLayout = () => {
  return (
    <div>
        <Navbar/>
        <HomePage/>
        <Footer/>
    </div>
  )
}

export default MainLayout