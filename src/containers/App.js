import React, {Component} from 'react';
import CardList from '../components/CardList';
// import { robots } from '../robots';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import './App.css'
import ErrorBoundary from './ErrorBoundary'

class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchField: '',
		}
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({robots: users}))
			// .then(_ => console.log(this.state.robots));
		// this.setState({robots: robots})
	}

	render() {
		const {robots, searchField } = this.state;
		
		const filteredRobots = robots.filter(robot => {
			return (robot.username.toLowerCase().startsWith(searchField.toLowerCase()))
		})

		return (!robots.length ? 
			<h1> Loading </h1> :
			(
				<div className='tc'> 
						<h1 style={{fontSize:'3rem'}}>RoboFriends</h1>
						<SearchBox onSearchChange={this.onSearchChange} searchField={searchField}/>
						<Scroll >
							<ErrorBoundary>
								<CardList filteredRobots={filteredRobots}/>
							</ErrorBoundary>
						</Scroll>
				</div>
			)
		)
	}
};

export default App;

