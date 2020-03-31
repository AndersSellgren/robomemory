import React from 'react';
import './Card.css'

function Card({id,username,email}) {
	const src = `https://robohash.org/set_set/bgset_bg1/${username}?size=200x200`
	const name = username
	return(
		<div className='bg-black dib br3 pa3 ma1 grow tc bw2 shadow-5'> 
			<img alt='robot.png' src={src} />
			<div>
				<h2> {name} </h2>
			</div>
			{/*<p> {email} </p>*/}
		</div>
	);
};

export default Card;