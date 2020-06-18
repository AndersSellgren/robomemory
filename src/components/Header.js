import React from 'react';

function Header({ totalClicks, seconds, width, height }) {
  return (
    <div style={divS(width,height)}>
      <div style={{textAlign:'right'}}><h3>Clicks:</h3></div>
      <div><h3>{totalClicks}</h3></div>
      <div style={{textAlign:'center'}}><h2>RoboMemory </h2></div>
      <div style={{textAlign:'right'}}><h3>Time:</h3></div>
      <div id="seconds"><h3>{seconds}</h3></div>
    </div>  
  );
}

const divS = () => {
  let divStyle = {
    display: 'grid',
    gridTemplateColumns: '17% 8% 50% 17% 8%',
  }
  
  if(window.innerHeight < window.innerWidth) {
    divStyle = {...divStyle, height: '10vh', lineHeight: '10vh'}
  } else {
    divStyle = {...divStyle, height: '10vw', lineHeight: '10vw'}
  }
  return divStyle
}


        
export default Header;