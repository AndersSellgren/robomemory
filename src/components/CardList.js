import React, { useRef } from 'react';
import Card from './Card';

function CardList({robots}) {
	const counter = useRef(0)

	return (
		<div style={divStyle}>
			{
				robots.map((robot) => {
					return (<Card
							key = {robot.id}
							username={robot.username} 
							pid = {robot.pid}
							counter = {counter}
							/>
					)
				})
			}
		</div>
	);
};

const divStyle = {
	gridColumn: '1 / -1',
	display: 'grid',
	justifyContent: 'center',
	gridTemplateColumns: 'repeat(6, 150px)',
	gridTemplateRows: '200px 200px 200px',
	gridGap: '1em',
	// margin: '1em'
}

export default CardList;

