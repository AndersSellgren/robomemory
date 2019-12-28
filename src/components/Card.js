import React from 'react';
import './Card.css'

function Card({id,username,email}) {
	return(
		<div className='bg-black dib br3 pa3 ma1 grow tc bw2 shadow-5'> 
			<img alt='robot.png' src={`https://robohash.org/${username}?size=200x200&set=set`} />
			<div>
				<h2> {username} </h2>
			</div>
			{/*<p> {email} </p>*/}
		</div>
	);
};

export default Card;