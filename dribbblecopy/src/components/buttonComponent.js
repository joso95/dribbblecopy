import React from 'react'

const ButtonCreation =(props)=>{
    return(
        <button onClick={console.log('it clicked')}>{props.name}</button>
    )
}

export default ButtonCreation