import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import FoodDeliver from './Components/FoodDeliver'
import Menu from './Menu'
import Customer from './Customer'
import Footer from './Components/Footer'
import Salad from './Salad'
import Flavours from './Flavours'
import Review from './Review'
import Nav from './Nav'


const Home = () => {
  return (
    <>
     <Nav/>
     <Navbar />
    <Hero />
    <FoodDeliver />
    <Menu />
     <Customer /> 
   <Salad />
    <Flavours />
    <Review />
    <Footer />
      
    </>
  )
}

export default Home
