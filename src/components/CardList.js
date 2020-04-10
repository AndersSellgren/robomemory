import React from 'react';
import Card from './Card';

function CardList({robots}) {

	return (
		<div style={divStyle}>
			{
				robots.map((robot) => {
					return (<Card 
							key={robot.id} 
							id={robot.id} 
							username={robot.username} 
							email={robot.email}
							pid = {robot.pid}/>
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

