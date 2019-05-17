import React, { Component } from 'react';
import '../styles/Navbar.css'


class Navbar extends Component {
  render() {
    const sections = ['home', 'Anout', 'Porfolio' , 'Contact'];
       const navLinks = sections.map(section => {
           return 
       });
    return (
      <div>
         <section className="top-nav">
    <div className="logo">
    <a href="#mainDiv">
      I'm Calvin
      </a>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li ><a href="#mainDiv">Home</a></li>
      <li><a href="#aboutDiv">About</a></li>
      <li><a href="#workDiv">Portfolio</a></li>
      <li><a href="#contactDiv">Contact</a></li>
    </ul>
  </section> 
  
     </div>
    )
  }
}

export default Navbar;
