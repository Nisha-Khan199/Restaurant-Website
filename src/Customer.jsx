import React from 'react'
import chef from '../src/assets/chef.png'

const Customer = () => {
  return (
    <>
    <div className="customer  ">
        <div className="left">
            <h3 >WHAT THEY SAY</h3>
            <h1>What Our Customers <br /> 
           <span className='mr-[12rem] '> Say About Us </span></h1>
            <p>"Fudo is the best. Besides the many and delicious  <br />meals, the service is also very good especially in <br />the very fast delivery.I highly recommend fudo <br />to you.</p>
        </div>
        <div className="right">
<img src={chef}alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Customer


