function Button(props) {
    
    function handleClick() {
        return props.newText(props.data((Math.floor(Math.random() * 100))));
    }

    return (
        <button style={{backgroundColor: props.bgColor}}id="new-quote" type="button" onClick={handleClick}>
        New quote
      </button>
    )
}

export default Button;