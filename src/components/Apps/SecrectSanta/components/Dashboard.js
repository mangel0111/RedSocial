import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddPlayer from './AddPlayer';


class Dashboard extends Component {
    render() {
        return (
            <div className='secrectSantaDashboard'>
                <h2 className='titlesSS'>Secrect Santa!!</h2>
                <p>This is the dashboard of the secrect Santa! Please select the day of the interchange gifs
                After that, add the info of the people who's going to participate'
                </p>
                <br />
                <MuiThemeProvider>
                    <AddPlayer />
                </MuiThemeProvider>
            </div>

        )
    }
}

export default Dashboard
