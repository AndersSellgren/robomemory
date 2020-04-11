import React from 'react';
import lightning from "./images/tinified/lightning.png";
import defaultImages from "./defaultImages";
import './Card.css'
import './Overlay.css'

let counter = 0

function Card(props) {

	let srcImg = `https://robohash.org/set_set1/${props.pid}?size=150x150`
	const arr = defaultImages()
	
	async function getDefaultImg(event) {
		await event.target.setAttribute("src", arr[counter])
		counter++
	}

	return(
		<div className="card grows">
			<div className="card-back card-face">
				<img alt="" src={ lightning } />
			</div>
			<div className="card-front card-face">
				<img className="card-value" onError={ (event) => getDefaultImg(event) } src={ srcImg } alt=""/>
				<h3>{props.username.substring(0,8)}</h3>	
			</div >
		</div>
	);
};

export default Card;