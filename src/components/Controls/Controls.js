import './Controls.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faRedoAlt } from '@fortawesome/free-solid-svg-icons';

export default function Controls(props) {
    const iconType = props.phase ? faPause : faPlay; 
    return (
        <div className='controls-container' >
            <button id="start_stop" onClick={props.startPause} >
                <FontAwesomeIcon icon={iconType}/>
            </button>
            <button id="reset" onClick={props.reset} >
                <FontAwesomeIcon icon={faRedoAlt}/>
            </button>
        </div>
    );
}