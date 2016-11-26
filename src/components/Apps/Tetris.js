import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import Header from './Tetris/containers/HeaderContainer';
import Field from './Tetris/components/Field';
import styles from './Tetris/styles/styles.css';
import ReduxThunk from 'redux-thunk';
import TetrisApp from './Tetris/reducers/index';

const store = createStore(
    TetrisApp,
    applyMiddleware(ReduxThunk)
);

class Tetris extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="tetrix-container">
                    <Header />
                    <Field />
                </div>
            </Provider>
        )
    }
}

export default Tetris;
