import React from 'react';
import './Overlay.css'

function Welcome({ imagesLoading,width,height }) {
  // console.log(width)
  return (
    <div className={'overlay visible'}>
      {width > height ?
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
        :
        <div className={'overlay-text'}>
          <div>
            <div className="lds-hourglass"></div>
            <h3> Rotate </h3>
            <h3> your screen! </h3>
          </div>
        </div>
      }
    </div> 
  )
}

export default Welcome
  