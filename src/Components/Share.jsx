

function Share(props) {
    const shareStyle = {textDecoration: "none", borderRadius: 3, backgroundColor: props.color};
    return (
            <a id={props.idName} style={shareStyle} href={props.appLink} target="_blank">
                <img className="logos" src={props.path} alt="github-logo"/>
            </a>
    )
}

export default Share;