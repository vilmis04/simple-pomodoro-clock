export default function Controls(props) {
    return (
        <div>
            <button id="start_stop" onClick={props.startPause} >
                START / PAUSE
            </button>
            <button id="reset" onClick={props.reset} >
                RESET
            </button>
        </div>
    );
}