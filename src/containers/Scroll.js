import React from 'react';

function Scroll(props) {
	return (
		<div style={divStyle}>
			{props.children}
		</div>
	);
};

const divStyle = {
	boxSizing: 'border-box', 
	display: 'flex',
	justifyContent: 'center',
	padding: '10px', 
	overflowY: 'auto', 
	border: '5px solid black', 
	height: '90vh', 
	width: '100wh', 
	zIndex:'1'
}

export default Scroll;