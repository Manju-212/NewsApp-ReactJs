// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <div> */}
          <Navbar />
          <Routes>
              <Route  path='/'   element={<News key="general" country="in" category="general" pageSize="6" />}/>
              <Route  path='/general'   element={<News key="general" country="in" category="general" pageSize="6" />}/>
              <Route  path='/entertainment'  element={<News key="entertainment"  country="in" category="entertainment" pageSize="6" />} />
              <Route  path='/sports'  element={<News key="sports"  country="in" category="sports" pageSize="6" />} />
              <Route  path='/health'  element={<News  key="health" country="in" category="health" pageSize="6" />} />
              {/* <Route  exact path='sciences'  element={<News key="sciences"  country="in" category="sciences" pageSize="6" />} /> */}
              <Route  path='/technology'  element={<News key="technology"  country="in" category="technology" pageSize="6" />} />
              <Route  path='/business'  element={<News key="business"  country="in" category="business" pageSize="6" />} />
          </Routes>
        {/* </div> */}
      </BrowserRouter>
    );
  }
}

