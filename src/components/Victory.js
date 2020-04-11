import React from 'react';
import './Overlay.css'

function Victory({totalClicks, seconds}) {
  return (
    <div className={'overlay victory'}>
        <div className={'overlay-text'}> 
          <h1> Well done! </h1>
          <h3> Total Score: {1000 - totalClicks - seconds} </h3>
          <br></br>
          <h3> Click here to play again! </h3>
        </div>
    </div> 
  )
}

export default Victory
  