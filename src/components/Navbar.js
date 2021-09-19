import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'
import'./Navbar.css';

{/*This code is from a tutorial by Brian Design on YouTube https://www.youtube.com/watch?v=I2UBjN5ER4s*/}

function Navbar(){
  const[click, setClick] =useState(false);
  const[button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };
  useEffect(() => {
    showButton(); }, []);


  window.addEventListener('resize', showButton);

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            PREPPA <i class="fas fa-book-reader"></i>
          </Link>
          <div className ='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-award' : "fas fa-bars"} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/TipsAndTricks' className='nav-links' onClick={closeMobileMenu}>
                Tips and Tricks
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Practice' className='nav-links' onClick={closeMobileMenu}>
                Practice
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
