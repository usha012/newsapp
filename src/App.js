import './App.css';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
 const  pageSize = 5;
 const [progress,setProgress] = useState(0)

    return (
      <>
       
      
      <BrowserRouter>
      <Navbar/>
        <LoadingBar height={3}
        color='#f11946'
        progress={progress}
      />
      <Routes>
  
    
   
     {/* <News setProgress={setProgress} pageSize= {pageSize} country="in" category="science"/> */}
     <Route exact path="/"  element={<News setProgress={setProgress} key="general" pageSize= {pageSize} country="in" category="general" color="warning"/>} />
     <Route exact path="/business"  element={<News setProgress={setProgress} key="business" pageSize= {pageSize} country="in" category="business"  color="success"/>} />
     <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize= {pageSize} country="in" category="entertainment"  color="dark"/>} />
     <Route exact path="/general" element={<News setProgress={setProgress} key="general"  pageSize= {pageSize} country="in" category="general"  color="danger"/>} />
     <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize= {pageSize} country="in" category="health"  color="primary"/>} />
     <Route exact path="/science"  element={<News setProgress={setProgress} key="science" pageSize= {pageSize} country="in" category="science"  color="info"/>} />
     <Route exact path="/sports"  element={<News setProgress={setProgress} key="sports" pageSize= {pageSize} country="in" category="sports"  color="secondary"/>} />
     <Route exact path="/technology"  element={<News setProgress={setProgress} key="technology" pageSize= {pageSize} country="in" category="technology"  color="warning"/>} />
    
      </Routes>
      </BrowserRouter>
      </>
    )
  
}


export default App;
