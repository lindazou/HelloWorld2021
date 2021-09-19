import React from 'react';

{/*List of potential interview questions; this is what generates the random interview questions for users*/}
const quoteList=  ["Tell Me About Yourself.","How Did You Hear About This Position?",
"Why Do You Want to Work at This Company?","Why Do You Want This Job?",
"Why Should We Hire You?"];

let num  = Math.floor(Math.random() * quoteList.length);

const Questions = (props) => (
  <div>
    <h2>{quoteList[num]}</h2>
  </div>
);
export default Questions;
