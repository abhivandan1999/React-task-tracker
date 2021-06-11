import React from 'react'

const Button = (props) => {

    return <button onClick = {props.onClick} className='btn' style={{backgroundColor:props.color}}>{props.text}</button>
}

Button.defaultProps = {
    color : 'steelBlue'
}

export default Button
