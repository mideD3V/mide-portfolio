import React from 'react'
import '../App.css'
import Dodov from '../asset/dodov.png'
const Projcard = () => {
  return (
    <div className="card">
      <img src={Dodov} alt="" />
      <div className="proj-desc">
        <h3>Porfolio for Hristiyan Dodov</h3>
      
      <p>Description: Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p></div>
    </div>
  );
}

export default Projcard