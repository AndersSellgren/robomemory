import React from 'react';
import './Overlay.css'

function Welcome({ loadingImages }) {
  return (
    <div className={'overlay visible'}>
        <div className={'overlay-text'}> 
          {loadingImages ? <div style={{"display": "flex", "justifyContent" : "center", "alignItems": "center"}}><h2> Loading </h2><div className="lds-hourglass"></div> </div>:
          <div>
            <h1> Welcome! </h1>
            <h2> Click here to start! </h2>
          </div>
          }
        </div>
    </div> 
  )
}

export default Welcome
  