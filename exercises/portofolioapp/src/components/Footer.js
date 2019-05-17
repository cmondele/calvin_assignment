import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div style={{
          left:'0',
          bottom: '0',
          width: '100%',
          height: '250px',
          backgroundColor: 'black',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
      }} className="footer">
        <p style={{color: 'white', }}>Calvin Mondele &copy; 2019</p>
{/* 
          <a href="#" className="fas fa-facebook"></a>
          <a href="#" className="fas fa-twitter"></a>
          <a href="#" className="fas fa-google"></a>
          <a href="#" className="fas fa-linkedin"></a>  */}
      </div>
    )
  }
}
