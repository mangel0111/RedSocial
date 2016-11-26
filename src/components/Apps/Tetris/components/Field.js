import React, { Component } from 'react';
import { isPlaying } from '../helper/HelperTetris';

class Field extends Component {
    constructor(props, context) {
        super(props, context);
        this.renderField = this.renderField.bind(this);
    }

    renderField() {
        if (isPlaying()) {
            return (<div>Hey</div>)
        }
        return null;
    }

    render() {
        return (
            <div>
                {this.renderField}
            </div>
        )
    }
}

export default Field
