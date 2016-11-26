import React, { Component } from 'react';
import { Layer, Stage } from 'react-konva';
import { isPlaying, isPaused, isGameOver } from '../helper/HelperTetris';
import TetrisConstants from '../TetrisConstants';
import Banner from './Banner.js';

const { fieldWidth, fieldHeight } = TetrisConstants;

class Field extends Component {
    constructor(props, context) {
        super(props, context);
        this.renderField = this.renderField.bind(this);
    }

    renderField() {
        if (isPlaying()) {
            return (
                <div className='tetrix-field'>
                    <div className='tetrix-game_Field'>
                        <Stage width={fieldWidth} height={fieldHeight}>
                            <Layer>
                            </Layer>
                        </Stage>
                        { isPaused ? <Banner label="PAUSED" color="black" opacity=".5" /> : null}
                    </div>
                    { isGameOver ? <Banner label="GAME OVER" color="red" opacity=".8" /> : null}
                </div>
            )
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
