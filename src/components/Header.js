import React from 'react';

function Header({seconds,totalClicks}) {
  return (
    <div style={divStyle1}>
      <div style={divStyle2}>
        <div style={{textAlign:'right'}}><h2>Clicks:</h2></div>
        <div><h2>{totalClicks}</h2></div>
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
	display: 'grid',
	gridTemplateColumns: '15% 10% 50% 15% 10%',
}
        
export default Header;