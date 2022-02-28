export default function Timer(props) {
    return (
        <div>
            <div>{props.stage}</div>
            <div>{props.time}</div>
        </div>
    );
}