import React from 'react';
import '../App.css';
import Button from './Button';
import './HeroSection.css';

{/*This code is from a tutorial by Brian Design on YouTube https://www.youtube.com/watch?v=I2UBjN5ER4s*/}

function HeroSection() {
  return (
    <div className ='hero-container'>
      <h1> Behavioral Interview Preparation </h1>
      <p> Easy interview preparation at your fingertips. Click on the button below to get started.</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>PRACTICE NOW</Button>

      </div>
    </div>
  )
}

export default HeroSection;
