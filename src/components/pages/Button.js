import React from 'react';
import './Button.css'
import{Link} from 'react-router-dom';

{/*This code is from a tutorial by Brian Design on YouTube https://www.youtube.com/watch?v=I2UBjN5ER4s*/}

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

{/* The main problem is here. This is a button function that all the buttons use. I don't know how the separate them from each other. The link to brings you to the Practice.js page, which is better than nothing. But I want the Subscribe button to clear out the email textbox and send a little thank you message to the user.*/}
  return(<Link to='/Practice' className='btn-mobile'>
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}>
      {children}
    </button>
  </Link>)
};

export default Button;
