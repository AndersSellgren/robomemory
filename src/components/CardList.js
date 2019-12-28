import React from 'react';
import Card from './Card';

function CardList({filteredRobots}) {

	// if (true) {
	// 	throw new Error("Nooooo");
	// }

	return (
		<div>
			{
				filteredRobots.map((robot) => {
					return (<Card 
							key={robot.id} 
							id={robot.id} 
							username={robot.username} 
							email={robot.email}/>
					)
				})
			}
		</div>
	);
};

export default CardList;

