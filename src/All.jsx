import React from 'react'

import Alldishes from './Alldishes'
import Nav3 from './Nav3'
import Heading from './Heading'
import Navbar from '../src/Components/Navbar'
import Footer from '../src/Components/Footer'


export default function All() {
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
     <Alldishes/>
     </div>
     </div>
     <Footer/>
    </>     
    
  )
}