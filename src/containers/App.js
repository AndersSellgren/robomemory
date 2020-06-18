/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useRef, useEffect} from 'react';
import CardList from '../components/CardList';
import Victory from '../components/Overlays/Victory';
import Welcome from '../components/Overlays/Welcome';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary'
import Header from '../components/Header'
import useWindowDimensions from '../components/WindowSize';
import { robotNames, preLoadRobots, animationCards, victory } from '../helpers'
import './App.css'

export var allImages = [];

function App() {
	// constant
	const numRobots = 9
	// variables that requires synchronized updates and 
	// should not cause a rendering
	const cardToCheck = useRef(null);
	const busy = useRef(true)
	const matchedCards = useRef([])
	// These states should result in rendering
	const [cards, setCards] = useState([])
	const [step, setStep] = useState(0)
	const [start, setStart] = useState(false)
	const [newRobots, setNewRobots] = useState(true)
	// These states are used in rendering => changes of 
	// these should result in rendering
	const [robots, setRobots] = useState([]);
	const [totalClicks, setTotalClicks] = useState(0)
	const [initOverlay, setInitOverlay] = useState(false)
	const [imagesLoading, setImagesLoading] = useState(true)
	const [seconds, setSeconds] = useState(0)

	// const { innerHeight: height } = window;
	const { width, height } = useWindowDimensions();
	const cardHeight = Math.round(0.25 * height)

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

	const cardMatch = (card1, card2) => {
		matchedCards.current = [...matchedCards.current,card1,card2];
		// card1.classList.add('matched');
		// card2.classList.add('matched');
		// this.audioController.match();
	}
	const cardMisMatch = (card1, card2) => {
		busy.current = true
		setTimeout(() => {
				card1.classList.remove('visible');
				card2.classList.remove('visible');
				busy.current = false
		}, 750);
	}

	const getCardType = (card) => {
		return card.getElementsByClassName('name')[0].innerHTML;
	}

	const checkForCardMatch = (card) => {
		if(getCardType(card) === getCardType(cardToCheck.current))
			cardMatch(card, cardToCheck.current);
		else 
			cardMisMatch(card, cardToCheck.current);
		
		cardToCheck.current = null;
		
		if (matchedCards.current.length === numRobots*2) {
			matchedCards.current = []
			setStart(false)
			setStep(0)
			victory(); 
		}
	}

	const canFlipCard = (card) => {
		return !busy.current && !matchedCards.current.includes(card) && card !== cardToCheck.current;
	}

	const flipCard = (card) => {
		if(canFlipCard(card)) {
			if(step === 0) {
				setStep(1)
			}
			// this.audioController.flip();
			setTotalClicks((totalClicks) => totalClicks + 1)
			card.classList.add('visible');

			if(cardToCheck.current) {
				checkForCardMatch(card);
			} else {
				cardToCheck.current = card;
			}
		}
	}


	useEffect(() => {
		if (newRobots) {
			const robotToLoad = robotNames.slice(0,numRobots).flatMap(robot => {
				let pidnr = (robot.id-1)*10 + Math.ceil(Math.random()*10);
				return [ {...robot, pid: pidnr, key: 2*robot.id-1 },{...robot, pid: pidnr, key: 2*robot.id } ]
			})
			setRobots(robotToLoad)
		}
	}, [newRobots])
	

	useEffect(() => {
		if (robots.length) {
			const cardsArray = Array.from(document.querySelectorAll('.card'))

			if (cardsArray.length) {
				for (const card of cardsArray) {
					card.addEventListener('click', () => {
						flipCard(card)
					})
				}
				setCards(cardsArray)
			}

			preLoadRobots(robots , allImages, cardHeight, setImagesLoading, numRobots)
				
			setInitOverlay(true)
		}
	}, [robots]);

	useEffect(() => {
		if(initOverlay) {
			const overlays = Array.from(document.querySelectorAll('.overlay'))
			for (const overlay of overlays) {
				overlay.addEventListener('click', () => {
					if (allImages.length === 2*numRobots) {
						overlay.classList.remove('visible')
						setSeconds(0)
						setStart(true)
					}
				})
			}
		}
	}, [initOverlay]);

	useEffect(() => {
		const timer = setInterval(() => {
			setSeconds(seconds => seconds + step);
		}, 1000);
		// componentDidUnmount right before the second call
		return () => clearInterval(timer)
  }, [step]);

	useEffect(() => {
		if(start) 
			startGame()
	}, [start])

  const startGame = () => {
		setTotalClicks(0)
		showCards()
		unShuffleCards()
		setNewRobots(false)
		busy.current = true;
		setTimeout(() => {
			// this.audioController.startMusic();
			shuffleCards();
			busy.current = false;
		}, 2500);
		setTimeout(() => hideCards(), 2000);
		animationCards()
	}

	return (!robots.length ? <h1> Loading </h1> :
			<div>
				{width > height ?
				<Header step={step} totalClicks={totalClicks} width={width} seconds={seconds} /> : null
				}
				<Welcome imagesLoading={imagesLoading} width={width} height={height}/>
				<Scroll >
					<ErrorBoundary>
						<CardList robots={robots} cardHeight={cardHeight} />
					</ErrorBoundary>
				</Scroll>
				<Victory totalClicks={totalClicks}/>
			</div>
	)
};

export default App;