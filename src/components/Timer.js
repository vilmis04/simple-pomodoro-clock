export default function Timer(props) {
    
    let minutes = Math.floor(props.time / 60);
    let seconds = Math.floor(props.time % 60);
  
    minutes = minutes < 10 ? '0'.concat(minutes) : ''.concat(minutes);
    seconds = seconds < 10 ? '0'.concat(seconds) : ''.concat(seconds);

    return (
        <div>
            <div>{props.stage}</div>
            <div>{`${minutes}:${seconds}`}</div>
        </div>
    );
}