import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots';
import Scroll from '../components/Scroll';
import './App.css'
import ErrorBoundary from './ErrorBoundary'

function App() {

	const [robots, setRobots] = useState([]);
	// const [changeFlag, setChangeFlag] = useState(false)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => setRobots(users))
	}, [])

	useEffect(() => {
		const cards = document.getElementsByClassName('card')
		
		if (cards !== 0) {
			for (const card of cards) {
				console.log("Working")
				console.log(card.classList)
				card.addEventListener('click', () => {
					if(card.classList.contains("visible")) {
						card.classList.remove('visible');
					} else {
						card.classList.add('visible');
					}
				})
			}
		}
  }, [robots]);
	
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