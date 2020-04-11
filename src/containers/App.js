/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import { robotNames } from './robots';
import Victory from '../components/Victory';
import Welcome from '../components/Welcome';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary'
import Header from '../components/Header'
import './App.css'

let cardToCheck = null;
let busy = true
let matchedCards = []
const numRobots = 9

function App() {

	const [robots, setRobots] = useState([]);
	const [cards, setCards] = useState([])
	const [seconds, setSeconds] = useState(0)
	const [step, setStep] = useState(0)
	const [totalClicks, setTotalClicks] = useState(0)
	const [start, setStart] = useState(false)

	const showCards = () => {
		cards.forEach(card => card.classList.add('visible'))
	}

	const hideCards = () => {
		cards.forEach(card => card.classList.remove('visible'))
	}

	const unShuffleCards = () => {
		for (let i =0; i < cards.length; i++) {
			cards[i].style.order = i+1;
		}
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

	const animationCards = () => {
		const cardValues = document.querySelectorAll('.card-back')
		setTimeout(() => {
			[...cardValues].map(card => card.classList.add('hideCards'))
		},2000)
		setTimeout(() => {
			[...cardValues].map(card => card.classList.remove('hideCards'))
		},3000)
	}

	const victory = () => {
		setStep(0)
		const overlayVictory = document.querySelector('.overlay.victory')
		overlayVictory.classList.add('visible')
		matchedCards = []
		setStart(false)
	}

	const cardMatch = (card1, card2) => {
		matchedCards = [...matchedCards,card1,card2];
		// card1.classList.add('matched');
		// card2.classList.add('matched');
		// this.audioController.match();
		if (matchedCards.length === numRobots*2) {
			victory(); 
		}
	}
	const cardMisMatch = (card1, card2) => {
		busy = true
		setTimeout(() => {
				card1.classList.remove('visible');
				card2.classList.remove('visible');
				busy = false
		}, 750);
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

	const canFlipCard = (card) => {
		return !busy && !matchedCards.includes(card) && card !== cardToCheck;
	}

	const flipCard = (card) => {
		if(canFlipCard(card)) {
			if(step === 0) {
				setStep(1)
			}
			// this.audioController.flip();
			setTotalClicks((totalClicks) => totalClicks + 1)
			card.classList.add('visible');

			if(cardToCheck) {
				checkForCardMatch(card);
			} else {
				cardToCheck = card;
			}
		}
	}

	const startGame = () => {
		setSeconds(0)
		setTotalClicks(0)
		showCards()
		unShuffleCards()
		busy = true;
		setTimeout(() => {
			// this.audioController.startMusic();
			shuffleCards();
			busy = false;
		}, 2500);
		setTimeout(() => hideCards(), 2000);
		animationCards()
	}
	// async function fetchData() {
	// 	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	// 	const data =  await response.json()
	// 	return data.slice(0,numRobots)
	// }

	useEffect(() => {
		const totRobots = robotNames.slice(0,numRobots).map(robot => {
			let pidnr = (robot.id-1)*10 + Math.ceil(Math.random()*10);
			return [ {...robot, pid: String(pidnr) },{...robot,id: Number(robot.id)+numRobots, pid: String(pidnr) } ]
		})
		setRobots(totRobots.flat(1))
	}, [])

	useEffect(() => {
		if (robots.length) {
			const cardsArray = Array.from(document.querySelectorAll('.card'))
			const overlays = Array.from(document.querySelectorAll('.overlay'))
			
			if (overlays.length) {
				for (const overlay of overlays) {
					overlay.addEventListener('click', () => {
						overlay.classList.remove('visible')
						setStart(true)
					})
				}
			}

			if (cardsArray.length) {
				for (const card of cardsArray) {
					card.addEventListener('click', () => {
						flipCard(card)
					})
				}
				setCards(cardsArray)
			}
		}
	}, [robots]);

	useEffect(() => {
		if(start) 
			startGame()
	}, [start])

  useEffect(() => {
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
				<Welcome />
				<Scroll >
					<ErrorBoundary>
						<CardList robots={robots} />
					</ErrorBoundary>
				</Scroll>
				<Victory seconds={seconds} totalClicks={totalClicks}/>
			</div>
		)
	)
};

export default App;