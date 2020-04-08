import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{overflowY: 'auto', border: '5px solid black', height: '90vh'}}>
			{props.children}
		</div>
	);
	// console.log(props);
};

export default Scroll;