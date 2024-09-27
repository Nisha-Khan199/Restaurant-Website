import React from 'react'
import Nav3 from '../src/Nav3'
import Navbar from '../src/Components/Navbar'
import Footer from '../src/Components/Footer'
import Juice from './Juice'

import Heading from './Heading'
export default function Juices() {
  return (
    
    <>  
    <Navbar />
    {/* <div className='heading'>
              <div className='heading1'>
                     <h2>Popular Food</h2>
              </div>
                <div className='border'></div>
       </div> */}


       <Heading/>
      <div className='Margin'>
        <div className='Margin1'> 

   
    <Nav3/>
    <Juice/>

  



    
     </div>
     </div>
     <Footer />
    </>
  )
}