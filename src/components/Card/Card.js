import React, { useState, useEffect } from 'react';
import lightning from "../images/tinyfied/lightning2.png";
import defaultImages from "../images/defaultImages";
import './Card.css'

function Card({ username, pid, id, cardHeight }) {
	
	const srcImg = `https://robohash.org/set_set1/${pid}?size=${100}x${100}`
	const imageSize = Math.round(0.7*cardHeight)
	const [size, setSize] = useState({
		height: `${100}px`,
		width: `${100}px` 
	})

	const resize = (value) => {
		return {
			height: `${value}px`,
			width: `${value}px` 
		}
	}

	useEffect(() => {
		console.log("Changed ImageSize")
		setSize(resize(imageSize))
	}, [imageSize])	

	const getDefaultImg = (event) => {
		event.target.setAttribute("src", defaultImages[id-1])
	}

	return(
		<div className="card grows">
			<div className="card-back card-face">
				<img alt="" src={ lightning } />
			</div>
			<div className="card-front card-face">
				<img style={size} className="card-value" onError={(event) => getDefaultImg(event)} src={srcImg} alt={`../images/tinyfied/default${id}.png`} />
				{
					cardHeight > 150 ? <h4 className="name"> {username.substring(0,8)} </h4> :
					<h6 className="name"> {username.substring(0,8)} </h6>
				}
			</div >
		</div>
	);
};

export default Card;