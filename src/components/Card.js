import React from 'react';
import lightning from "./images/tinified/lightning2.png";
import defaultImages from "./defaultImages";
import './Card.css'
import './Overlay.css'

function Card({ username, pid, id, cardHeight }) {

	// console.log(cardHeight)
	const imageSize = Math.round(0.8*cardHeight)
	// const cardWidth1 = 0.6*cardWidth

	let srcImg = `https://robohash.org/set_set1/${pid}?size=${imageSize}x${imageSize}`	

	const getDefaultImg = (event) => {
		event.target.setAttribute("src", defaultImages[id-1])
	}

	return(
		<div className="card grows">
			<div className="card-back card-face">
				<img alt="" src={ lightning } />
			</div>
			<div className="card-front card-face">
				<img className="card-value" onError= { (event) => getDefaultImg(event) } src={ srcImg } alt = { `./images/tinified/default${id}.png` } />
				{
					cardHeight > 110 ? <h4 className="name"> {username.substring(0,8)} </h4> :
					<h6 className="name"> {username.substring(0,8)} </h6>
				}
				
			</div >
		</div>
	);
};

export default Card;