import React, { Component } from "react";
import "../styles/Work.css";
import panelImg from "../img/pannelboard.png";
import imageloop from "../img/imageloop.png";
import face from "../img/face-recognition.png";
import agenda from "../img/agenda.png";
import movie from "../img/movie.png";
import shoes from "../img/shoes-k.png";

class Work extends Component {
  render() {
    const workStyle = {
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    };

    const imgStyle = {
      width: "600px",
      height: "400px"
    };

    return (
      <div className="portfolio" style={workStyle}>
        <div id="workDiv">
          <h1>Portfolio</h1>
          <div>
            <h2>Latest Work</h2>
          </div>
          <div className="galleryList">
            <div className="gallery">
              <a href="https://sheltered-ocean-99764.herokuapp.com/">
                <img
                  style={imgStyle}
                  src={panelImg}
                  alt=""
                  width="600"
                  height="400"
                />
              </a>
            </div>
            <div className="gallery">
            <a  href="http://imageloop.surge.sh/">
              <img
                style={imgStyle}
                href=""
                src={imageloop}
                alt=""
                width="600"
                height="400"
              />             
              </a>
            </div>
            <div className="gallery">
            <a href="https://rocky-eyrie-58112.herokuapp.com/">
              <img
                style={imgStyle}
                href=""
                src={face}
                alt=""
                width="600"
                height="400"
              />
              </a>
            </div>
            <div className="gallery">
            <a href="http://agendamanager.surge.sh/">
              <img
                style={imgStyle}
                href=""
                src={agenda}
                alt=""
                width="600"
                height="400"
              />
              </a>
            </div>
            <div className="gallery">
            <a href="http://movieboard.surge.sh/">
              <img
                style={imgStyle}
                href=""
                src={movie}
                alt=""
                width="600"
                height="400"
              />
              </a>
            </div>
            <div className="gallery">
            <a href="http://shoeskiosk.surge.sh/">
              <img
                style={imgStyle}
                href=""
                src={shoes}
                alt=""
                width="600"
                height="400"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
