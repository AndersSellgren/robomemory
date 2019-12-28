import React from 'react';
import '../containers/App.css'

function SearchBox({onSearchChange}) {

	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--black'
				style={{backgroundColor: '#eee'}}
				type='search' 
				placeholder='Search Robots'
				// value={searchField}
				onChange={onSearchChange}
				/>
		</div>
	)
}

export default SearchBox