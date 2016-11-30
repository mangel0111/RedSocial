import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Header from './Tetris/containers/HeaderContainer';
import Field from './Tetris/components/Field';
import styles from './Tetris/styles/styles.css';
import ReduxThunk from 'redux-thunk';
import TetrisApp from './Tetris/reducers/index';
import CurrentGameInfo from './Tetris/containers/CurrentGameInfo.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

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
                    <div className='tetrix-fieldscore'>
                        <Field />
                        <MuiThemeProvider>
                            <CurrentGameInfo />
                        </MuiThemeProvider>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default Tetris;
