import React from 'react';
import './Card.css'

const Card = (props) => {
	const srcImg = `https://robohash.org/set_set1/${props.username}?size=75x75`

	return(
		<div className='bg-black dib br3 ma1 grow tc bw2 shadow-5'> 
			<img alt="" src={ srcImg } />
			<div>
				<h5> {props.username.substr(0,8)} </h5>
			</div>
			{/*<p> {email} </p>*/}
		</div>
	);
};

export default Card;