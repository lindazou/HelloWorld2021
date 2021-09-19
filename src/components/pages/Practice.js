import React from 'react';
import Timer from 'react-timer';
import Questions from "./randomQuestion";
import Navbar from '../Navbar';
import './Practice.css'
{/*}// other classes im importing*/}

{/* This is where the user can practice answering interview questions live and time themselves*/}
  function Practice(){
      const OPTIONS = { prefix: 'seconds elapsed!', delay: 100};
      return (
        <div className="Practice">
            <p>
            Instructions: You will be asked
            a series of common interview questions.
            </p>
            <p>
            The timer is for you to keep track of
            how long it takes to answer each one. Refresh the page for a new question.
            </p>
            <Questions />
            <Timer options={OPTIONS} />
        </div>
      );
    }

  export default Practice;
