import React, { Component } from 'react';
import '../styles/About.css';
import img from '../img/about.jpg'

class About extends Component {
  render() {
  
    const aboutStyle = {
         width: ''
    }

    return (
      <div>  
        <div id="aboutDiv" style={aboutStyle} className="aboutPage">
        <div className="aboutCard">
             <div className="imgMedia">
             <img className="aboutImg" alt="" src={img}/>
             </div>
             <div>
             <h1 className="aboutTitle">Calvin Mondele</h1>
             {/* <h1 style={{color: 'black'}}>Calvin Mondele</h1> */}

             <p>
                Hello! I am Calvin Mondele, a junior 
                web developer with skill in JavaScript
                language. I build full-stack web applications
                using MERN stack. Mongodb, Express.js, React.js
                and Node.js. I love to learn the new technology
                and apply it to my work. 

             </p>
             {/* <p>Experienced with a demonstrated history 
               of working in the arts and crafts industry.
                Skilled in Visual Arts, and now working as 
                a web developer, skilled in HTML, CSS3, 
                JavaScript, MongoDB, Express.js, React.js, 
                Node.js. Strong business development professional
                 attending V School.</p> */}
           </div>
           </div>
        </div>
      </div>
    )
  }
}

export default About;
