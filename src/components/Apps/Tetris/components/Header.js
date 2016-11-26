import React from 'react';
import { loadMenu } from '../actions/index.js';
import { isPlaying, setStatus } from '../helper/HelperTetris';

class Header extends React.Component {
	
	render() {
		setStatus('Play');
		return (
			<div className='tetrix-container'>
				<h1 className='tetrix-header'>TETRIS</h1>
				{!isPlaying() ? <h2 className='tetrix-info'>Press spacebar to start the game</h2> : null }
			</div>
		);
	}
}

export default Header;
