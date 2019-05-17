import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faStroopwafel)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
        <About />
        <Work />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
