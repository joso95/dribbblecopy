import React from 'react';
import ButtonComponent from './buttonComponent'


const url = "https://cdn.dribbble.com/assets/art-banners/romainbriaux-db195db2c89f7f239f555901e8578e08987c000329287238e961b378a62a15e5.png"
const IntroPic =()=>{
    return(
        <div className='largeContainer'>

            <div className='introText'>
            <   h1>Discover the world’s top designers and creatives</h1>
                <p>Dribbble is the leading destination to find and showcase creative work and home to the world's best design professionals.</p>
                <ButtonComponent name="Sign up"/>
            </div>

            <div className='introImg'>
                    <img src={url} width='510px' height='360px'></img>
            
                    <span className='credit'>
                        Art by Romain Briaux
                    </span>
            </div>
        </div>
        )
}

export default IntroPic