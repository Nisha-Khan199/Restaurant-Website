import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import map from '../assets/Map.png'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import Nav from '../Nav'
import { RxCross2 } from "react-icons/rx";
const BookTable = () => {
  //Form Handling
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [person, setPerson] = useState("");

  const navigate = useNavigate();
 //sending  Form data  to mock API using axios post.

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("clciekd");
  axios
    .post("https://66ce9334901aab24841edbca.mockapi.io/Food_App", {
      name: name,
      date: date,
      time:time,
      phone: phone,
      person:person
    })
    .then(() => {
      // navigate("/");
    });
};
const [popUp,setPopUp]= useState(false)

const handleClick=(id)=>{

 
  setPopUp(!popUp)
}
const closePopUp=()=>{
  setPopUp(!popUp)
 }
  return (
    <>
   <Nav />
    <Navbar />
    <div className="map">
   
    <div className="toptable mt-24 ">
    <h1>Book A Table</h1>
        <p>We Consider all the drivers of change gives you the components <br />
        you need to change to create a truely happen</p>
   
        <form onSubmit={handleSubmit}>
        <div className="form z-10 ">
          <div className="formitems">
            <div className="formleft">
              <div>
              <label htmlFor="" >Date</label>
            <input  onChange={(e) => setDate(e.target.value)} type='date'  /></div>
            <div> <label htmlFor="">Name</label>
            <input  onChange={(e) => setName(e.target.value)} type="text"  placeholder='Enter your name' /> </div>
            </div>
            <div className="formright">
            <div>
            <label htmlFor="">Time</label>
            {/* <input type='text' id='options' placeholder='Enter Your name' /> */}
            <select  onChange={(e) => setTime(e.target.value)} >
              <option value="">
                1 PM
              </option>
              <option value="">
              2 PM
              </option>
              <option value="">
              9 PM
              </option>
            </select>
            
            
            </div>
            <div>
            <label htmlFor="">Phone</label>
            <input  onChange={(e) => setPhone(e.target.value)} type="text"  placeholder='x-xxx-xxx-xxxxx'/></div>
            </div></div>
            <div className="midform">
            <label htmlFor="">Total Person</label> 
          <select  onChange={(e) => setPerson(e.target.value)} name="" id="">
            <option value="">1 Person</option>
            <option value="">2 Person</option>
            <option value="">3 Person</option></select> </div>
       
        <button onClick={()=> {handleSubmit; handleClick()}}   className='bg-red-900 w-[32vw] mt-5 rounded-2xl py-2 text-white'> Book A table</button>
        </div></form>
        {popUp?
          
          <div>
              <div className=' modal animate-fade-in-down h-[300px] w-[30%] bg-white shadow-xl  text-black  rounded-3xl absolute top-[40%] right-[30%]'>
               
        
               
                
            <div onClick={closePopUp} className='mx-7 text-xl my-8 bg-orange-600 rounded-3xl h-[35px] w-[35px] pl-2 pt-2' >  <RxCross2 /></div>
         
            <div  className='   text-black'>
            <h2  className=' modalh font-bold  '>Table Booked Succesfully</h2>
           
              <button onClick={closePopUp} className='bg-orange-600 px-6 rounded-3xl mt-[6vh]'>OK</button>
            </div>
            
            </div>  
             
            </div> :""}




     </div> 
    </div>
   
      <Footer />
    </>
  )
}

export default BookTable
