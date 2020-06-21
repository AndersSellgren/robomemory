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
		border: '5px solid black',  
		zIndex:'1'
	}
	if(height < width){
		divStyle = {...divStyle, height: '90vh', width: '100vw'}
	} else {
		divStyle = {...divStyle, height: '90vw', width: '88vh'}
	}

	return divStyle
}

export default Scroll;