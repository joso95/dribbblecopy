import React from 'react';
import IntroPic from './introPic'
import IntroText from './introText'
import './Introduction.css'

const Intro =()=>{
    return(
        <div className='wrapper'>
            <div className='background'>
                <div className='largeContainter'>
                    <IntroText/>
                    <IntroPic/>
                </div>
            </div>
        </div>
)}

export default Intro
