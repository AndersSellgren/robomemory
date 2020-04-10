import React from 'react';
import './Overlay.css'

function Victory({totalClicks, seconds}) {
  return (
    <div className={'overlay victory'}>
        <div className={'overlay-text'}> 
          <h1> Well done </h1>
          <h2> Total Score: {1000 - totalClicks - seconds} </h2>
          <br></br>
          <h3> (Click to play again!) </h3>
        </div>
    </div> 
  )
}

export default Victory
  