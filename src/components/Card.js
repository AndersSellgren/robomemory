import React from 'react';
import lightning from "./images/tinified/lightning.png";
import defaultImages from "./defaultImages";
import './Card.css'
import './Overlay.css'

function Card({username, pid, counter}) {

	let srcImg = `https://robohash.org/set_set1/${pid}?size=150x150`	

	async function getDefaultImg(event) {
		await event.target.setAttribute("src", defaultImages[counter.current])
		counter.current = counter.current + 1;
	}

	return(
		<div className="card grows">
			<div className="card-back card-face">
				<img alt="" src={ lightning } />
			</div>
			<div className="card-front card-face">
				<img className="card-value" onError = {(event) => getDefaultImg(event)} src={ srcImg } alt=""/>
				<h3>{username.substring(0,8)}</h3>	
			</div >
		</div>
	);
};

export default Card;