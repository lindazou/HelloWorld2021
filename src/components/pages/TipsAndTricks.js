import React from 'react';
import Navbar from '../Navbar';
import ReactPlayer from 'react-player';
import './TipsAndTricks.css'
{/* Helpful interview tips and tricks for website users */}
function TipsAndTricks(){
  return(<div className="TipsAndTricks">
      <h1> Ace Your Next Interview </h1>
      <p>
      Below are some videos that you may find helpful for your next interview.
      </p>
      <ReactPlayer controls url='https://www.youtube.com/watch?v=J1u8cNRC_vo' />
      <ReactPlayer controls url = 'https://www.youtube.com/watch?v=E5Uj_66NZwI'/>
      <ReactPlayer controls url = 'https://www.youtube.com/watch?v=NFPWpYfNSkI' />
  </div>);
  }

export default TipsAndTricks;
