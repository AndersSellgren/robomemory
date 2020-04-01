import React from 'react';
import './Card.css'

const Card = (props) => {
	const srcImg = `https://robohash.org/set_set1/${props.username}?size=200x200`

	return(
		<div className='bg-black dib br3 ma3 grow tc bw2 shadow-5'> 
			<img alt="" src={ srcImg } />
			<div>
				<h2> {props.username} </h2>
			</div>
			{/*<p> {email} </p>*/}
		</div>
	);
};

export default Card;