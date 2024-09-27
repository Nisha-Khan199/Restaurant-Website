import React from 'react'
import food from '../src/assets/food.png'
import { FaLocationDot } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <>
    <div id='about' className="fmenu  ">
        <div className="menucontent flex items-center justify-center">

            <div className="left">
  
                <img src={food}  alt="" />
                
                <div className="visitus  text-white h-[25vh] relative rounded-lg p-3 bottom-[7vh] left-[22vh] w-[16vw]">
                <h3 className='font-bold mb-[0.5rem]'>Come and Visit us</h3>
                  <div className="phone flex gap-6 items-center mb-[0.8rem] ">
                    <FaPhone  className='text-xl '/>
                    <p>(09997)441222</p>
                  </div>

<div className="email flex  gap-6 items-center mb-[0.8rem] ">
  <FaRegEnvelope  className=' text-xl '/>
<p>info@solushfy.com</p>
</div>
<div className="location flex gap-6 items-center ">
  <FaLocationDot className=' text-4xl' />
  <p className='text-sm'>OFFICE NO 14, SECOND FLOOR 
  MADNI PLAZA UPPER CHENNAI
  MANSEHRA, KPK, PAKISTAN
</p>
</div>

                </div>
     
            </div>
            <div className="right">
                <h1>OUR MENU </h1>
               <h2> We Provide healthy <br />
                food for your family</h2>
                <p>Our story begin with a vision to create a unique dining <br />
                experience that merges fine dining, exceptional service, and a <br />
                vibrant ambiance.Rooted in city's rich culinary culture, we aim to <br />
                honor our local roots while infusing a global palate.   
                 <br /> <br />At place, we believe that dining is not just about food, but also about the  overall experience.Our staff renowed for their warmth and dedication, 
                 stress to make every visit an unforgettable event.
                </p>
           
         <Link to="/about"> <button className='py-2 px-3 rounded-lg border-2 border-orange-500 hover:bg-orange-600 hover:border-none '>Learn More</button> </Link>  </div>
        </div>
    </div>
      
    </>
  )
}

export default Menu
