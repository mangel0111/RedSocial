import React from 'react';
import { loadMenu } from '../actions/index.js';

class Header extends React.Component {
	componentDidMount() {
		this.props.dispatch(loadMenu());
	}

	render() {
		return (
			<div className='tetrix-container'>
				<h1 className='tetrix-header'>TETRIS</h1>
				{!this.props.isPlaying ? <h2 className='tetrix-info'>Press spacebar to start the game</h2> : null}
			</div>
		);
	}
}

Header.propTypes = {
	isPlaying: React.PropTypes.string,
};

export default Header;
