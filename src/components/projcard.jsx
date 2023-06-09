import React from 'react'
import '../App.css'
import Dodov from '../asset/dodov.png'
const Projcard = () => {
  return (
    <div className="card">
      <img src={Dodov} alt="" />
      <div className="proj-desc">Porfolio for Hristiyan Dodov</div>
    </div>
  );
}

export default Projcard