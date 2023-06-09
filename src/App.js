import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
// import Header from './components/header'
import About from './components/header'
import Body from './components/body'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Routes>
        
        <Route path='/' exact element={<Body/>}/>
        <Route path='/about' element={<About/>}/>
</Routes>
      {/* <Body /> */}
    </div>
  );
}

export default App;
