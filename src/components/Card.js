import React from 'react';
import './Card.css'

const Card = (props) => {
	const srcImg = `https://robohash.org/set_set1/${props.username}?size=150x150`

	return(
		<div style={cardStyle} className="card">
			<div style={divStyle} className="card-back card-face">
				{/* <img className="card-value" alt="" src={ srcImg2 } /> */}
			</div>
			<div style={divStyle} className="card-front card-face">
				<img className="card-value" alt="" src={ srcImg } />
				<h3 style={h3Style}>{props.username.substr(0,8)}</h3>	
			</div >
		</div>
	);
};

const cardStyle =  {
	position: 'relative',
	display: 'flex',
	justifyContent: 'center',
  height: '175px',
	width: '125px',
	margin: '1em',
}

const divStyle = {
	position: 'absolute',
  width: '100%',
  height: '100%',
	backgroundColor: 'black',
	margin: '0.1em',
	textAlign: 'center',
	borderRadius: '1em',
	overflow: 'hidden',
	backfaceVisibility: 'hidden',
	transition: 'transform 500ms ease-in-out'
};

const h3Style = {
	color: 'white',
	margin: '0.5rem',
	padding: '5px'
}

export default Card;