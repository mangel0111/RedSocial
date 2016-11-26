import React from 'react';
import Header from './Tetris/components/Header';
import Field from './Tetris/components/Field';
import styles from './Tetris/styles/styles.css';


class Tetris extends React.Component {
 
    render() {
        return (
            <div className="tetrix-container">
                <Header />
                <Field/>
            </div>
        )
    }
}

export default Tetris;
