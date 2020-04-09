/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundary from './ErrorBoundary'


let cardToCheck = null;
let busy = true

function App() {

	const [robots, setRobots] = useState([]);
	const [cards, setCards] = useState([])
	const [matchedCards, setMatchedCards] = useState([])

	const showCards = () => {
		cards.forEach(card => card.classList.add('visible'))
	}

	const hideCards = () => {
		cards.forEach(card => card.classList.remove('visible'))
	}

	const shuffleCards = () => {
		for (let i =0; i < cards.length; i++) {
			cards[i].style.order = i+1;
		}
		for(let i = cards.length-1; i > 0; i--) {
				let randIndex = Math.floor(Math.random() * (i+1));
				let temp = cards[randIndex].style.order
				cards[randIndex].style.order = cards[i].style.order;
				cards[i].style.order = temp;
		}
		// for(let i = 0; i < cards.length; i++) {
		//     console.log(cards[i].style.order)
		// }
		// setCards([...cards])
		// return cards
	}

	const cardMatch = (card1, card2) => {
		setMatchedCards([...matchedCards,card1,card2]);
		// card1.classList.add('matched');
		// card2.classList.add('matched');
		// this.audioController.match();
		// if(this.matchedCards.length === this.cardsArray.length)
				// this.victory(); 
	}
	const cardMisMatch = (card1, card2) => {
			busy = true
			setTimeout(() => {
					card1.classList.remove('visible');
					card2.classList.remove('visible');
					busy = false
			}, 1000);
	}

	const canFlipCard = (card) => {
		// console.log(busy)
		return !busy && !matchedCards.includes(card) && card !== cardToCheck;
	}

	const flipCard = (card) => {
		if(canFlipCard(card)) {
			console.log(card)
			// this.audioController.flip();
			// this.totalClicks++;
			// this.ticker.innerText = this.totalClicks;
			card.classList.add('visible');

			if(cardToCheck) {
				console.log("Inside cardToCheck")
				checkForCardMatch(card);
			} else {
				// setCardToCheck(card);
				cardToCheck = card;
				console.log("Outside cardToCheck")
				// console.log(card)
				// console.log(cardToCheck)
			}
		}
	}

	const getCardType = (card) => {
		console.log(card.getElementsByClassName('card-value')[0].src)
		return card.getElementsByClassName('card-value')[0].src;
	}

	const checkForCardMatch = (card) => {
		if(getCardType(card) === getCardType(cardToCheck))
				cardMatch(card, cardToCheck);
		else 
				cardMisMatch(card, cardToCheck);

		cardToCheck = null;
}
	
	const startGame = () => {
		showCards()
		// setCardToCheck(null);
		// this.totalClicks = 0;
		// this.timeRemaining = this.totalTime;
		// matchedCards = [];
		busy = true;
		setTimeout(() => {
			// this.audioController.startMusic();
			shuffleCards();
			// this.countDown = this.startCountDown();
			busy = false;
		}, 2200);
		setTimeout(() => hideCards(), 2000);
		// this.timer.innerText = this.timeRemaining;
		// this.ticker.innerText = this.totalClicks;
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(robots => robots.slice(0,9).map(robot => [robot,{...robot,id: Number(robot.id)*10}]))
			.then(totRob => setRobots(totRob.flat(1)))
	}, [])

	useEffect(() => {
		const cardsArray = Array.from(document.querySelectorAll('.card'))
		
		if (robots.length) {
			// for (const card of cardsArray) {
			// 	card.addEventListener('click', () => {
			// 		if(card.classList.contains("visible")) {
			// 			card.classList.remove('visible');
			// 		} else {
			// 			card.classList.add('visible');
			// 		}
			// 	})
			// }
			for (const card of cardsArray) {
				card.addEventListener('click', () => {
					flipCard(card)
				})
			}
			setCards(cardsArray)
		}
	}, [robots]);

	useEffect(() => {
		startGame()
	}, [cards])

	useEffect(() => {
		// startGame()
	}, [flipCard])

	return (!robots.length ? 
		<h1> Loading </h1> :
		(
			<div className='tc'> 
					<h1 style={{fontSize:'2rem'}}>RoboMemory</h1>
					<Scroll >
						<ErrorBoundary>
							<CardList robots={robots} />
						</ErrorBoundary>
					</Scroll>
			</div>
		)
	)
};

export default App;