
import React from 'react'


import {  BrowserRouter  as Router,Routes, Route}  from 'react-router-dom'
import Home from '../src/Home'

import BookTable from './Components/BookTable'
import Bestmenu from './Bestmenu'
import AboutUs from './AboutUs'
import Our_Menu from './Our_Menu'
import All from './All'
import Juices from './juices'
import Soup from './Soup'



const App = () => {


  return (
    <>

    <Router>
   <Routes>
     <Route path='/' element={ <Home />} />
   < Route path='/booktable'  element={ <BookTable />}/>
   < Route path='/Bestmenu'  element={ <Bestmenu />}/>
   < Route path='/about'  element={ <AboutUs />}/>
   < Route path='/Our-Menu'  element={ <Our_Menu />}/>
   <Route path="/soup" element={ <Soup />} />
  <Route  path="/juice" element={<Juices />} />
          
 <Route path="/all" element={<All />} />

     
    </Routes>
    </Router>
    </>
  )
}

export default App
