import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='hero'>
      <div className="content">
    <h1  className=' ' >Best food for <br /> your taste</h1>
    <p>discover deluctable cuisine and unforgettable moments <br />in our welcoming,culinary heaven</p>
    <div className="btns flex gap-4 mt-8 ">
    <Link to='/booktable'> <button className=' order bg-orange-500 py-2 px-3  rounded-lg hover:bg-white hover:border-orange-600 hover:border-2'>Order Food</button></Link> 
      <button className='py-2 px-3 rounded-lg border-2 border-orange-500 hover:bg-orange-600 hover:border-none'>Learn More</button>
    </div>
    </div>
    </div>
  )
}

export default Hero
