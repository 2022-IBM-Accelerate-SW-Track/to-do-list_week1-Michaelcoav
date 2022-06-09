import React, { Component } from 'react';
import './About.css';
import imgSrc from "../assets/MichaelCoca.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <img className="profile_image left centered" src={imgSrc} alt="Michael" />
        </div>
        
        <div className="split right">
          <div className="centered">
            <h1 className="name_title">Michael Coca-Vargas</h1>
            <p className="brief_description">My name is Michael Coca-Vargas, I am a rising junior at George Mason University. My hobbies include playing video games, watching anime, and coding.</p>
          </div>
        </div>
        
      </div>
    )
  }
}