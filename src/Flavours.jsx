import React from 'react'
import icecream from '../src/assets/icecream.png'

const Flavours = () => {
  return (
    <>
    <div className='flavours flex items-center  justify-between'>
        <div className="left ">
            <h1 >THE SUPER <br /> SUNDAY</h1>
            <p className='mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident autem ut ipsam ad. Sequi vel velit perspiciatis quod ea harum.</p>
            <button className='border-2 border-orange-400 p-4'>Search Your Flavours</button>
        </div>
        <div className="right">
            <img src={icecream} alt="" />
        </div>
    </div>
      
    </>
  )
}

export default Flavours
