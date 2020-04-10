/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots';
import Victory from './Victory';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Header from './Header'

let cardToCheck = null;
let busy = true
let matchedCards = []
const numRobots = 1

function App() {

	const [robots, setRobots] = useState([]);
	const [cards, setCards] = useState([])
	const [seconds, setSeconds] = useState(0)
	const [step, setStep] = useState(0)
	const [totalClicks, setTotalClicks] = useState(0)
	const [victory, setVictory] = useState(false)
	// const timerToClearSomewhere = useRef(false)

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
	}

	const win = () => {
		setStep(0)
		setTimeout(() => setVictory(true), 2000)
		// clearInterval(timerToClearSomewhere.current)
		// console.log(seconds)
		// console.log(totalClicks)
	}

	const cardMatch = (card1, card2) => {
		matchedCards = [...matchedCards,card1,card2];
		console.log(matchedCards)
		console.log(card1)
		// card1.classList.add('matched');
		// card2.classList.add('matched');
		// this.audioController.match();
		if (matchedCards.length === 2) {
			console.log("Victory")
			win(); 
		}
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
		return !busy && !matchedCards.includes(card) && card !== cardToCheck;
	}

	const flipCard = (card) => {
		if(step === 0) {
			setStep(1)
		}
		if(canFlipCard(card)) {
			// this.audioController.flip();
			setTotalClicks((totalClicks) => totalClicks + 1)
			card.classList.add('visible');

			if(cardToCheck) {
				console.log("Inside cardToCheck")
				checkForCardMatch(card);
			} else {
				cardToCheck = card;
				console.log("Outside cardToCheck")
			}
		}
	}

	const getCardType = (card) => {
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
		busy = true;
		setTimeout(() => {
			// this.audioController.startMusic();
			shuffleCards();
			busy = false;
		}, 2200);
		setTimeout(() => hideCards(), 2000);
	}

	useEffect(() => {
		
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(robots => robots.slice(0,numRobots).map(robot => [robot,{...robot,id: Number(robot.id)+numRobots}]))
			.then(totRob => setRobots(totRob.flat(1)))
	}, [])

	useEffect(() => {
		const cardsArray = Array.from(document.querySelectorAll('.card'))
		
		if (robots.length) {
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
		// setSeconds(0)
		
		const timer = setInterval(() => {
			setSeconds(seconds => seconds + step);
		}, 1000);
		// componentWillUnmount
		return () => clearInterval(timer)

  }, [step]);

	return (!robots.length ? 
		<h1> Loading </h1> :
		(
			<div>
				<Header seconds={seconds} totalClicks={totalClicks} />
				<Scroll >
					<ErrorBoundary>
						<CardList robots={robots} />
					</ErrorBoundary>
				</Scroll>
				<Victory seconds={seconds} totalClicks={totalClicks} victory={victory}/>
			</div>
		)
	)
};

export default App;