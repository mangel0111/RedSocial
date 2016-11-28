import React from 'react';
import { Layer, Stage } from 'react-konva';
import { connect } from 'react-redux';
import Banner from './Banner.js';
import CurrentTetromino from '../containers/CurrentTetromino.js';
import ActiveTetrominos from '../containers/ActiveTetrominos.js';
import tetrisConstants from '../model//tetrisConstants.js';

const { fieldHeight, fieldWidth } = tetrisConstants;

let GameField = ({ isPlaying, isPaused, isGameOver }) => {
	if (isPlaying) {
		return (
			<div className='tetrix-field'>
				<div className='tetrix-game_Field'>
					<Stage width={fieldWidth} height={fieldHeight}>
						<Layer>
							<CurrentTetromino />
							<ActiveTetrominos />
						</Layer>
					</Stage>
					{ isPaused ? <Banner label="PAUSED" color="black" opacity=".5" /> : null}
                    { isGameOver ? <Banner label="GAME OVER" color="red" opacity=".8" /> : null}
				</div>	
			</div>
		);
	}
	return null;
};

const mapStateToProps = ({ gameStatus }) => ({
	isPlaying: gameStatus !== 'IDLE',
	isPaused: gameStatus === 'PAUSED',
	isGameOver: gameStatus === 'GAME_OVER',
});

GameField = connect(mapStateToProps)(GameField);

export default GameField;
