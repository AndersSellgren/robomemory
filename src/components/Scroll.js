import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{boxSizing: 'border-box', padding: '10px', overflowY: 'auto', border: '5px solid black', height: '90vh', width: '100wh'}}>
			{props.children}
		</div>
	);
	// console.log(props);
};

export default Scroll;