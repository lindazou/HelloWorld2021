import React from 'react'
import Button from './Button'
import './Footer.css'

{/*This code is from a tutorial by Brian Design on YouTube https://www.youtube.com/watch?v=I2UBjN5ER4s*/}
function Footer() {
  return (
    <div className = 'footer-container'>
      <section className = 'footer-subscription'>
        <p className = 'footer-subscription-heading'>
          Subscribe for monthly interview preparation advice, opportunities, and more!
        </p>
        <div className ='input-areas'>
          <form>
            <input type = 'email' name='email' placeholder="Your Email Here" className = 'footer-input'/>
            <Button buttonStyle ='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      
    </div>
  )
}
export default Footer
