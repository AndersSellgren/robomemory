import React from 'react';
import './Card.css'
import lightning from "./lightningTiny.png";

const Card = (props) => {
	const srcImg = `https://robohash.org/set_set1/${props.username}?size=150x150`

	return(
		<div className="card grows">
			<div className="card-back card-face">
				<img alt="" src={ lightning } />
			</div>
			<div className="card-front card-face">
				<img className="card-value" alt="" src={ srcImg } />
				<h3>{props.username.substr(0,8)}</h3>	
			</div >
		</div>
	);
};

export default Card;