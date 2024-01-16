const Button = (props) => {
    console.log(props)
    return <button onClick={props.hiceClick} style={{color: 'red'}}></button>
}

export default Button