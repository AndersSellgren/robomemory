import React from 'react';

function Victory({totalClicks, seconds, victory}) {
  return (
    <div className={'visible'} style={divContainer}>
        <div style={divStyle}> 
          <h1> Victory </h1>
          <h2> Your total score was {1000 - totalClicks - seconds} points!! </h2>
        </div>
    </div> 
  )
}

const divContainer = {
  display: 'flex',
  position: 'fixed',
  top: -100,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
}

//Add divContainer visible and eventListener 

const divStyle = {
  // display: 'flex',
  position: 'relative',
  height: '20vh',
  width: '50wh',
  textAlign: 'center',
  marginTop: '20vh',
  zIndex:9 
}

export default Victory
  