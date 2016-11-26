import React from 'react';
import TetrisConstants from './Tetris/TetrisConstants';
import Header from './Tetris/components/Header';
import styles from './Tetris/styles/styles.css';

const { fieldWidth, fieldHeight } = TetrisConstants;

class Tetris extends React.Component {

    render() {
        return (
            <div className="tetrix-container">
                <Header />

            </div>
        )
    }
}

export default Tetris;
