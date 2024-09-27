import React from 'react'
import Navbar from './Components/Navbar'
import  menudata from  '../src/menudata.json'
import Footer from './Components/Footer'
import Nav from './Nav'

const Bestmenu = () => {
  return (
    <>
    <Nav/>
    <Navbar />
    <h1 className=' besth text-black mt-24 text-center'>
             Best Menu
         </h1>
    <div className="best ">
         
        
      {
        
menudata.map((data)=>{
        return (
          

          <div className="wrap  ">
         
<div key={data.id} className="bestmenuitem ">
  <div className="img">
<img src={data.imageSrc} alt="" />
</div>
   
   <p>{data.title}</p>

   </div>

   </div> )
      } )}
      </div>
      <Footer />
    </>
  )
}

export default Bestmenu
