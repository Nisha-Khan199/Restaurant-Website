import React from 'react'
import display1 from '../src/assets/display1.png'
import display from '../src/assets/display.png'
import chef1 from '../src/assets/chef1.png'
const Salad = () => {
  return (
    <>
      <div className="salad p-[30px] flex items-center justify-center bg-pink-100">
        <div className="left flex items-center gap-5 justify-center">
        <img src={chef1} className='chef'  alt="" />
        <div className="display ">
        <img src={display}  className='foodimg mt-14' alt="" />
        <img src={display1} className='foodimg1 mt-6 '  alt="" />
      
        </div>
        </div>
        <div className="right">
        <h1>Always Fresh  <br /> <span className='mr-[12rem] '> Salad</span>

        </h1>
            
            <p>Always fresh, a salad crisp and bright . greens and <br />
            veggies in perfect bite. Tossed with care a splash of <br />
            zest. Every Flavour put to test. A vibrant crunch with <br />
            every light bite.</p>
<button className='bg-orange-500 px-5 py-2 mt-8 '>View Menus</button>
        </div>
    </div>
    </>
  )
}

export default Salad
