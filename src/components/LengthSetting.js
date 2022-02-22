// import { useState } from 'react';

export default function LengthSetting(props) {


    return (
        <div>
            <div>
                {props.name}
            </div>
            <div>
                <button>-</button>
                <span>{props.value}</span>
                <button>+</button>
            </div>
        </div>
    );
}