import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 5;
  
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <>
       
      
      <BrowserRouter>
      <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
      <Routes>
  
    
   
     {/* <News setProgress={this.setProgress} pageSize= {this.pageSize} country="in" category="science"/> */}
     <Route exact path="/"  element={<News setProgress={this.setProgress} key="general" pageSize= {this.pageSize} country="in" category="general" color="warning"/>} />
     <Route exact path="/business"  element={<News setProgress={this.setProgress} key="business" pageSize= {this.pageSize} country="in" category="business"  color="success"/>} />
     <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize= {this.pageSize} country="in" category="entertainment"  color="dark"/>} />
     <Route exact path="/general" element={<News setProgress={this.setProgress} key="general"  pageSize= {this.pageSize} country="in" category="general"  color="danger"/>} />
     <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize= {this.pageSize} country="in" category="health"  color="primary"/>} />
     <Route exact path="/science"  element={<News setProgress={this.setProgress} key="science" pageSize= {this.pageSize} country="in" category="science"  color="info"/>} />
     <Route exact path="/sports"  element={<News setProgress={this.setProgress} key="sports" pageSize= {this.pageSize} country="in" category="sports"  color="secondary"/>} />
     <Route exact path="/technology"  element={<News setProgress={this.setProgress} key="technology" pageSize= {this.pageSize} country="in" category="technology"  color="warning"/>} />
    
      </Routes>
      </BrowserRouter>
      </>
    )
  }
}


