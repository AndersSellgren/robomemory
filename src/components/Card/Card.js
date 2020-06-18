import React from 'react';
import lightning from "../images/tinyfied/lightning2.png";
import defaultImages from "../images/defaultImages";
import './Card.css'

function Card({ username, pid, id, cardHeight }) {

	const imageSize = Math.round(0.8*cardHeight)
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
				<img className="card-value" onError= { (event) => getDefaultImg(event) } src={ srcImg } alt = { `../images/tinyfied/default${id}.png` } />
				{
					cardHeight > 150 ? <h4 className="name"> {username.substring(0,8)} </h4> :
					<h6 className="name"> {username.substring(0,8)} </h6>
				}
			</div >
		</div>
	);
};

export default Card;