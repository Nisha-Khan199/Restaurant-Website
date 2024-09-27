import React, { useState } from "react";
import logo from '../assets/logo.png'
import japanese from '../assets/japanese.png'
import chips from '../assets/chips.png'
import dish from '../assets/dish.png'
import cheese from '../assets/cheese.png'
import foodf from '../assets/foodf.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
   FaTwitter 
 
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
    <div className="bg-gray-950 text-gray-400">
      <div className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            <img src={japanese} alt="Logo" className="max-w-[60px] " />
              <img src={logo} alt="Logo" className="max-w-[190px] " />
             
            </h1>
            <p className="mt-8">
              In the new era of technology , we look <br />
              in the future with certainity and pride to <br />
              for our company and.
              {" "}
            </p>
            <br />
           
            {/* Social Handle */}
            <div className=" social flex items-center gap-3 mt-6">
              <a href="#">
                <FaTwitter className="text-xl" />
               </a>
              <a href="#">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#">
                <FaGithub className="text-xl " />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
               Pages
                </h1>
                <ul className={"flex flex-col gap-3 text-gray-400"}>
                <Link  > <li className="cursor-pointer">Home</li></Link> 
                 <li className="cursor-pointer">  <a href="#about"> About </a></li>
                 <li className="cursor-pointer"> <a href="#">Menu </a></li>
                 <li className="cursor-pointer">Pricing</li>
                  <li className="cursor-pointer">Blog</li>
               <Link to='/booktable'>  <li className="cursor-pointer">Contact</li></Link> 
                 <li className="cursor-pointer"> <a href="#delivery">Delivery </a></li>
                </ul>
              </div>
            </div>
           
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Menu Categories
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Pizza</li>
                  <li className="cursor-pointer">Burgers</li>
                  <li className="cursor-pointer">Menu Categories</li>
                  <li className="cursor-pointer">Fish Bars</li>
                </ul>
              </div>
            </div>
            <div className=" foot py-8 px-6 ">
            <h1 className="sm:text-xl text-xl  font-bold sm:text-left text-justify mb-3">
               Follow us on Instagram
                </h1>
                <div className="fimg flex gap-4  w-[52vw] ">
                  <div className="left ">
                    <img className="mb-4" src={cheese} />
                    <img src={dish} />
                  </div>
                  <div className="right ">
                  <img className="mb-4" src={chips} />
                  <img src={foodf} />
                  </div>
                </div>
                
                
                </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @copyright 2024 All rights reserved || Made with ❤ by Solushfy
          </div>
        </div>
        </div>  
        </div>  
   
        </>
  
  )
}

export default Footer;