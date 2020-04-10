/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots';
import Victory from '../components/Victory';
import StartPage from '../components/StartPage';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundary from './ErrorBoundary'
import Header from '../components/Header'

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
		// console.log("Shuffling")
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

	const victory = () => {
		setStep(0)
		const overlayVictory = document.querySelector('.overlay.victory')
		overlayVictory.classList.add('visible')
		matchedCards = []
		setStart(false)
	}

	const cardMatch = (card1, card2) => {
		matchedCards = [...matchedCards,card1,card2];
		console.log(matchedCards)
		console.log(card1)
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
			}, 1000);
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
		setSeconds(0)
		setTotalClicks(0)
		unShuffleCards()
		showCards()
		console.log(robots)
		if (true) {
			console.log("inside startGame")
		}
		busy = true;
		setTimeout(() => {
			// this.audioController.startMusic();
			shuffleCards();

			busy = false;
		}, 2500);
		setTimeout(() => hideCards(), 2000);
		const cardValues = document.querySelectorAll('.card-back')
		setTimeout(() => {
			for (let card of cardValues) {
				card.classList.add('hidden')
			}
		},2000)
		setTimeout(() => {
			for (let card of cardValues) {
				card.classList.remove('hidden')
			}
		},3000)
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => data.slice(0,numRobots).map(robot => {
				let pidnr = robot.id*10 + Math.ceil(Math.random()*10)
				return [ {...robot, pid: String(pidnr) },{...robot,id: Number(robot.id)+numRobots, pid: String(pidnr) } ]
			}))
			.then(totRob => setRobots(totRob.flat(1)))
	}, [])

	useEffect(() => {
		if (robots.length) {
			const cardsArray = Array.from(document.querySelectorAll('.card'))
			const overlays = Array.from(document.querySelectorAll('.overlay'))
			
			if (overlays.length) {
				console.log('overlays')
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
				<StartPage />
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