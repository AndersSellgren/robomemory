import React from 'react';
import './Overlay.css'

function StartPage() {
  return (
    <div className={'overlay visible'}>
        <div className={'overlay-text'}> 
          <h1> Welcome </h1>
          <br></br>
          <h2> (Click here to play!) </h2>
        </div>
    </div> 
  )
}

export default StartPage
  