import React from 'react'

const ButtonCreation =(props)=>{
    return(
        <button className={props.class} onClick={console.log('#')}>{props.name}</button>
    )
}

export default ButtonCreation