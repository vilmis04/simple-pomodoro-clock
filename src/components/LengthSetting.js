// import { useState } from 'react';

export default function LengthSetting(props) {
    const DECREMENT_STEP = -1;
    const INCREMENT_STEP = 1;

    const decrementTimer = (timer, step) => props.handleClick(props.name, DECREMENT_STEP);
    const incrementTimer = (timer, step) => props.handleClick(props.name, INCREMENT_STEP);


    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                <button onClick={decrementTimer}>
                    -
                </button>
                <span>{props.value}</span>
                <button onClick={incrementTimer}>
                    +
                </button>
            </div>
        </div>
    );
}