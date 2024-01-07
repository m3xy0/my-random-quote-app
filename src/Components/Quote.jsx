

function Quote(props) {
    return (
        <div>
            <p id="text">
                {props.quotes}
            </p>
            <p id="author">
                {props.author}
            </p>
        </div>
    )
}

export default Quote;