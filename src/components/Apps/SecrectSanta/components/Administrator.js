import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class Administrator extends Component {
    state = {
        value: null,
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        const actions = [
            <FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />,
        ];
        return (
            <div>
                <RaisedButton label="Create a Date to gie Secrect Santa" onTouchTap={this.handleOpen} />
                <Dialog
                    title="Create a date!"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    >
                    Please fill the Information
                    <div className='infoSecrectSanta'>
                        <TextField
                            hintText="Prece Min."
                            floatingLabelText="Select the min price to give"
                            />
                        <br />
                        <TextField
                            hintText="Prece Max."
                            floatingLabelText="Select the max price to give"
                            />
                        <br />
                        Select the day!
                        <DatePicker hintText="Select the day" mode="landscape" />
                        Select the time!
                        <TimePicker hintText="12hr Format" />
                    </div>
                </Dialog>
            </div>
        )
    }
}

export default Administrator
