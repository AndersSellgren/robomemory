import React from 'react';
import './Card.css'
import './Overlay.css'
import lightning from "./lightningTiny.png";
import defaultImg from "./default.png";
import defaultImg2 from "./default2.png";

let counter = 0

const Card = (props) => {
	let srcImg = `https://robohash.org/set_set1/${props.pid}?size=150x150`
	const arr = [defaultImg,defaultImg,defaultImg2,defaultImg2]
	
	const getDefaultImg = (event) => {
		event.target.setAttribute("src", arr[counter])
		counter++
	}

	return(
		<div className="card grows">
			<div className="card-back card-face">
				<img alt="" src={ lightning } />
			</div>
			<div className="card-front card-face">
				<img className="card-value" onError={ getDefaultImg } src={ srcImg } alt=""/>
				<h3>{props.username.substring(0,8)}</h3>	
			</div >
		</div>
	);
};

export default Card;