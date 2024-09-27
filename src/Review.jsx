import React from 'react'
import  review1 from '../src/assets/review1.png'
import  review2 from '../src/assets/review2.png'
import  review3  from '../src/assets/review3.png'

const Review = () => {
  return (
    <>
  
<div className=' review h-[80vh]'>

   <h1>What Our Customers say</h1>
<div  className="reviews">
    <div class="reviewcon">
       <h3> '' The Best Resturant ''</h3>
        <p className='preview'>Laat night we dined at place and were <br />
        simply blown away. From the moment <br />
        we stepped in we were enveloped in an  <br />
        inviting atmosphere and greeted with <br />
         warm smiles.</p>
        <div className="profile">
            <img src={review1} alt=""/>
            <div className="intro">
                <h2>Sophia Robson</h2>
                <p>Los Angeles, CA</p>
            </div>

        </div>
       

    </div>
    <div class="reviewcon">
    <h3> '' Simply Delicious''</h3>
        <p className='preview'>Place exceeded by expectations on all <br />
        fromts. The ambiance was cozy and <br />
        relaxed , making it a perfect venu for our <br />
        anivarsary dinner . Each dish was <br />
        prepared and beautifully presented.</p>
        <div class="profile">
            <img src={review2} alt=""/>
            <div class="intro">
                <h2>Matt Canon</h2>
                <p>san Diogo, CA</p>
            </div>

        </div>
   

    </div> 
    <div class="reviewcon">
    <h3> '' One of a Kind Resturant ''</h3>
        <p className='preview'>The culinary experience at place is first <br />
        to none.The atmosphere is vibrant, the <br />
        food - nothing short of extraordinary. the <br />
        food was highlight for our evening. <br />
        Highly recommended.</p>
        <div class="profile">
            <img src={review3} alt=""/>
            <div class="intro">
                <h2>Andy Smith</h2>
                <p>San Francisco, CA</p>
            </div>

        </div>
    

    </div>
    </div>
    </div>
    
</>
 
  )
}

export default Review;
