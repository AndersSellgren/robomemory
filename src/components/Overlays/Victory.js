import React from 'react';
import './Overlays.css'

function Victory({totalClicks}) {
  const seconds = document.getElementById("seconds")
  let sec = 0
  
  if(seconds) {
    sec = Number(seconds.innerText)
  } 

  return (
    <div className={'overlay victory'}>
        <div className={'overlay-text'}> 
          <h1> Well done! </h1>
          <h3> Total Score: {1000 - totalClicks - sec} </h3>
          <h3> Click here to play again! </h3>
        </div>
    </div> 
  )
}

export default Victory
  