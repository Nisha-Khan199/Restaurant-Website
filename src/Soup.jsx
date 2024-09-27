import React from 'react'
import Nav3 from '../src/Nav3'
import Soups from '../src/Soups'
import Heading from './Heading'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function Soup() {
  return (
    <>  
     {/* <div className='heading'>
              <div className='heading1'>
                     <h2>Popular Food</h2>
              </div>
                <div className='border'></div>
       </div> */}
<Navbar />
<Heading/>
<Nav3/>

      <div className='Margin'>
        <div className='Margin1'>  

   
    
     <Soups/>
     </div>
     </div>
     <Footer />
    </>
  )
}