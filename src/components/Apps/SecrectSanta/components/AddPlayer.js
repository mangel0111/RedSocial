import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';


class AddPlayer extends Component {
    state = {
        value: null,
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <DatePicker hintText="Select the day" mode="landscape" />
                <SelectField
                    floatingLabelText="Sex"
                    value={this.state.value}
                    onChange={this.handleChange}
                    >
                    <MenuItem value={null} primaryText="" />
                    <MenuItem value={false} primaryText="Male" />
                    <MenuItem value={true} primaryText="Female" />
                </SelectField>
            </div>
        )
    }
}

export default AddPlayer
