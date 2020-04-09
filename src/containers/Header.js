import React from 'react';

function Header({seconds}) {
  return (
    <div style={divStyle1}>
      <div style={divStyle2}>
          <div style={{textAlign:'center'}}><h2> Do something here </h2></div>
          <div style={{textAlign:'center'}}><h1>RoboMemory </h1></div>
          <div style={{textAlign:'right'}}><h2>Time:</h2></div>
          <div><h2>{seconds}</h2></div>
      </div>
    </div> 
  );
}
const divStyle1 = {
  height: '10vh'
}


const divStyle2 = {
  lineHeight: '10vh',
  // justifyContent: 'start',
	display: 'grid',
	gridTemplateColumns: '25% 50% 12% 12%',
	// gridTemplateRows: '40px',
	// gridGap: '1em',
	// margin: '0.1em'
}
        
export default Header;