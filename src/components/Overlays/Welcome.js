import React from 'react';
import './Overlays.css'

function Welcome({ imagesLoading,width,height }) {
  // console.log(width)
  return (
    <div className={'overlay visible'}>
      <div className={'overlay-text'}>
        {imagesLoading ? 
          <div style={{"display": "flex", "justifyContent" : "center", "alignItems": "center"}}>
            <h2> Loading </h2>
            <div className="lds-hourglass"></div>
          </div>
          :
          <div>
            <h1> Welcome! </h1>
            <h1> Click here to start! </h1>
          </div>
        }
      </div>
    </div> 
  )
}

export default Welcome
  