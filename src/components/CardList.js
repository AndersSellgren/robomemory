import React from 'react';
import Card from './Card/Card';
import { calcCardHeight } from '../helpers'
// import './CardList.css'

function CardList({robots,width,height}) {

	const cardHeight = calcCardHeight(width, height)

	const divStyle = () =>  ({
		gridColumn: '1 / -1',
		display: 'grid',
		justifyContent: 'center',
		gridTemplateColumns: `repeat(6, ${cardHeight*0.75}px)`,
		gridTemplateRows: `repeat(3, ${cardHeight}px`,
		gridGap: `${cardHeight*0.1}px`
	})

	return (
		<div style={divStyle()}>
			{
				robots.map((robot) => {
					return (<Card
							key = {robot.key}
							id = {robot.id}
							username={robot.username} 
							pid = {robot.pid}
							cardHeight={cardHeight}
							// counter = {counter}
							/>
					)
				})
			}
		</div>
	);
};


export default CardList;

