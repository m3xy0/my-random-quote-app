function Share(props){
    return (
        <a id="tweet-quote" href={props.appLink} target="_blank">{props.appName}</a>
    )
}

export default Share;