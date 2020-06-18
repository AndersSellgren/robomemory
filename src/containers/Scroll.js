import React from 'react';

function Scroll({ children, width, height }) {
	return (
		<div style={divS(width, height)}>
			{children}
		</div>
	);
};

const divS = (width, height) => {
	let divStyle = {
		boxSizing: 'border-box', 
		display: 'flex',
		justifyContent: 'center',
		padding: '10px', 
		overflowY: 'auto', 
		border: '5px solid black',  
		zIndex:'1'
	}
	if(height < width){
		divStyle = {...divStyle, height: '100vh', width: '100vw'}
	} else {
		divStyle = {...divStyle, height: '100vw', width: '100vh'}
	}

	return divStyle
}




export default Scroll;