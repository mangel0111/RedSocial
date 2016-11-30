import React, { Component } from 'react';
import Dashboard from './SecrectSanta/components/Dashboard';
import style from './SecrectSanta/styles/styles.css';
import Checkbox from 'material-ui/Checkbox';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 16,
    },
};

var isAdm = false;

class SecrectSanta extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className='bodyContainer'>
                <MuiThemeProvider>
                    <Checkbox
                        label="Administrator"
                        style={styles.checkbox}
                        />
                </MuiThemeProvider>
                <Dashboard
                    isAdm={true}
                    />
            </div>
        )
    }
}

export default SecrectSanta;
