import React from 'react';
import dribbble from './dribbble.png'
import './dribbbleLogo.css'
import './Header.css'
import NavCreation from './navComponent'
import ButtonCreation from './buttonComponent'

const Header =()=>{
    return(
        <div className='header'>
            <div className='headerFlexbox'>
                <img src={dribbble} width='80px' height='76px'/>
                <ul className='innerHeader'>
                    <span className='navSpanLeft'>
                        <NavCreation name={'Explore'}/>
                        <NavCreation name={'For designers'}/>
                        <NavCreation name={'|'}/>
                        <NavCreation name={'Hiring Designers'}/> 
                    </span> 
                 
                    <span className='navSpanRight'>  
                        <NavCreation name={'Sign In'}/>
                        <NavCreation name={'Sign up'}/>
                    </span>
                </ul> 
                </div>
            </div>    
    )
}

export default Header;