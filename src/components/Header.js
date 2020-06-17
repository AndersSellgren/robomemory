import React, { useState, useEffect } from 'react';

function Header({totalClicks, width, step}) {
  const [seconds, setSeconds] = useState(0)
  
  useEffect(() => {
    if (step === 1 ) {
      setSeconds(0)
    }
		const timer = setInterval(() => {
			setSeconds(seconds => seconds + step);
		}, 1000);
		// componentDidUnmount right before the second call
		return () => clearInterval(timer)
  }, [step]);

  return (
    <div style={divStyle1}>
        {
          width > 900 ?  
            <div style={divStyle2}>
              <div style={{textAlign:'right'}}><h3>Clicks:</h3></div>
              <div><h3>{totalClicks}</h3></div>
              <div style={{textAlign:'center'}}><h2>RoboMemory </h2></div>
              <div style={{textAlign:'right'}}><h3>Time:</h3></div>
              <div><h3>{seconds}</h3></div>
            </div> :
            <div style={divStyle3}>
              <div style={{textAlign:'right'}}><h5>Clicks:</h5></div>
              <div><h5>{totalClicks}</h5></div>
              <div style={{textAlign:'center'}}><h4>RoboMemory </h4></div>
              <div style={{textAlign:'right'}}><h5>Time:</h5></div>
              <div id="seconds"><h5>{seconds}</h5></div>
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