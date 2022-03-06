import './LengthSetting.css';
export default function LengthSetting(props) {
    const DECREMENT_STEP = -1;
    const INCREMENT_STEP = 1;

    const decrementTimer = (timer, step) => props.handleClick(props.name, DECREMENT_STEP);
    const incrementTimer = (timer, step) => props.handleClick(props.name, INCREMENT_STEP);

    let type = '';

    if (props.name.includes('Break')) {
        type = 'break';
    } else {
        type = 'session';
    }
    
    return (
        <div className="setting-container" >
            <div className='setting-label' id={`${type}-label`}>
                {props.name}
            </div>
            <div>
                <button id={`${type}-decrement`} onClick={decrementTimer}>
                    -
                </button>
                <span id={`${type}-length`} >{props.value}</span>
                <button id={`${type}-increment`} onClick={incrementTimer}>
                    +
                </button>
            </div>
        </div>
    );
}