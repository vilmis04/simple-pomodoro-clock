export default function Controls(props) {
    return (
        <div>
            <button onClick={props.startPause} >
                START / PAUSE
            </button>
            <button onClick={props.reset} >
                RESET
            </button>
        </div>
    );
}