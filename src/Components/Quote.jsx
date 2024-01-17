

function Quote(props) {
    return (
        <div>
            <span id="quotemark" style={{color: props.color, display: "inline"}}>" </span>
            <p id="text" style={{color: props.color}}>
                {props.quotes}
            </p>
            <p id="author" style={{color: props.color}}>
                - {props.author}
            </p>
        </div>
    )
}

export default Quote;