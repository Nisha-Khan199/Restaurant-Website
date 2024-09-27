import React from 'react'
import delivery1 from '../assets/delivery1.png'
import delivery2 from '../assets/delivery2.png'
import delivery3 from '../assets/delivery3.png'

const FoodDeliver = () => {
  return (
    <div id='delivery' className=' delv h-[75vh] w-full '>
      <h1 className='text-4xl text-center my-[8vh] tracking-wider '>Your favourite Food <br /> Delivery Partner</h1>
      <div className="delivery">
        <div className="deliver">
        <img className='w-[150px]' src={delivery1} alt="" />
        <h2>Easy To Order</h2>
        <p> You  only need  a few steps in <br /> ordering food </p></div>
        <div className="deliver">
        <img className='w-[120px]' src={delivery2} alt="" />
        <h2>Easy To Order</h2>
        <p> You  only need  a few steps in <br /> ordering food </p></div>
        <div className="deliver">
        <img  className='w-[150px]' src={delivery3} alt="" />
        <h2>Easy To Order</h2>
        <p> You  only need  a few steps in <br /> ordering food </p></div>
      </div>
     
     </div>
   
  )
}

export default FoodDeliver
