import React from 'react'
import about from '../src/assets/about.png'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Nav from './Nav'

const AboutUs = () => {
  return (
    <>
    <Nav/>
    <Navbar />
     <div className="menu1  ">
        <div className="menucontent1 flex items-center justify-center">

            <div className="left1">
  
                <img src={about}  alt="" />
                
            
     
            </div>
            <div className="right1">
                
                <p>Welcome to best food, where passion for food meets a <br />
               commitment to exceptional taste. Established with a vision to <br />
              redefine your culinary experience, we take pride in offering a <br />
              diverse and deluctable menu that reflects our dedication to <br />
              quality and flavour. <br />
              At Mede Food Club,we are more than just a resturant, we are a <br />
              gastronomic heaven where each dish tells a story.our journey <br />
              began with the ambition to create a space that celebrates the <br />
              richness of global cuisines, with a special focus on the hearty,<br />
              the indulgenta and the downright delicious. <br />
              What sets us apart is our unwavering commitement to using only <br />
              the finest,freshest ingredients.From the crispy perfection of our <br />
              crusts to the succulence of our meats, every element is <br />
              meticulosly selected to ensure an unforgettable dining <br />
              experience.

        
                </p>
           
            <button className='py-2 px-3 rounded-3xl border-2 border-orange-400 '>View Menus</button> </div>
        </div>
    </div>
      <Footer />
    </>
  )
}

export default AboutUs
