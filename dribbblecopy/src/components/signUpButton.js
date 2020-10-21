import React from 'react'

const SignUpButton =(props)=>{
    return(
        <button onClick={console.log('this doesnt print')} className='signUpButton'>{props.name}</button>
    )
}

export default SignUpButton