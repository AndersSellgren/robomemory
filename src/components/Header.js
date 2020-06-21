import React, {useState, useEffect} from 'react';

function Header({ reset, start, totalClicks, width, height }) {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let timer = null;
    if (start && !reset) {
      timer = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }else if (start && reset) {
      setSeconds(0)
    } else if (!start && reset) {
      clearInterval(timer)
    } 
    return () => clearInterval(timer);

  }, [start, reset]);

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

const divS = (width,height) => {
  let divStyle = {
    display: 'grid',
    gridTemplateColumns: '17% 8% 50% 17% 8%',
  }
  
  if(width > height) {
    divStyle = {...divStyle, height: '10vh', width: '100vw', lineHeight: '10vh'}
  } else {
    divStyle = {...divStyle, height: '10vw', width: '88vh', lineHeight: '10vw'}
  }
  return divStyle
}


        
export default Header;