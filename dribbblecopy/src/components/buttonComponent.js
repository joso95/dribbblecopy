import React from 'react'

const ButtonCreation =(props)=>{
    return(
        <button className='basicButton' onClick={console.log('#')}>{props.name}</button>
    )
}

export default ButtonCreation