import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import '../styles/Contact.css'


class Contact extends Component {
  render() {
    return (
      <div id="contactDiv" className='center contact'>
        <div className='mb-4'>
          <h1>Contact</h1>
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <h3>Salt Lake City, UT 84104, USA</h3>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <h3>8019288107</h3>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <h3>cmondele88@gmail.com</h3>
                
                </li>
            </ul>
        </div>
        </div>
           
      </div>
    )
  }
}

export default Contact;
