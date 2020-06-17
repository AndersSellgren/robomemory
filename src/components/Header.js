import React from 'react';

function Header({seconds,totalClicks,cardHeight}) {
  return (
    <div style={divStyle1}>
        {
          cardHeight > 110 ?  
            <div style={divStyle2}>
              <div style={{textAlign:'right'}}><h2>Clicks:</h2></div>
              <div><h2>{totalClicks}</h2></div>
              <div style={{textAlign:'center'}}><h1>RoboMemory </h1></div>
              <div style={{textAlign:'right'}}><h2>Time:</h2></div>
              <div><h2>{seconds}</h2></div>
            </div> :
            <div style={divStyle3}>
              <div style={{textAlign:'right'}}><h5>Clicks:</h5></div>
              <div><h5>{totalClicks}</h5></div>
              <div style={{textAlign:'center'}}><h4>RoboMemory </h4></div>
              <div style={{textAlign:'right'}}><h5>Time:</h5></div>
              <div><h5>{seconds}</h5></div>
            </div>  
        }
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

const divStyle3 = {
  lineHeight: '10vh',
	display: 'grid',
	gridTemplateColumns: '15% 10% 50% 15% 10%',
}
        
export default Header;