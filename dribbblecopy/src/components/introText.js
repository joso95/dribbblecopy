import React from 'react'
import NavCreation from './navComponent'

const IntroText =()=>{
    return(
        <div className='introText'>
            <h1>Discover the world’s top designers and creatives</h1>
            <p>Dribbble is the leading destination to find and showcase creative work and home to the world's best design professionals.</p>
            <NavCreation name={'Sign up'}/>
        </div>
    )
}

export default IntroText