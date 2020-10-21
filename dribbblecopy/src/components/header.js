import React from 'react';
import Explore from './explore'
import dribbble from './dribbble.png'
import './dribbbleLogo.css'
import DribbbleHomepage from './dribbbleHomepage'
import ForDesigners from './forDesigners';
import HiringDesigners from './hiringDesigners';
import SignIn from './signIn'
import SignUp from './signUp'
import './Header.css'


const Header =()=>{
    return(
        <div className='header'>
            <div className='headerFlexbox'>
                <img src={dribbble} width='80px' height='76px'/>
                <div className='innerHeader'>
                    <span className='navSpanRight'>
                        <DribbbleHomepage/>
                        <Explore/>
                        <ForDesigners/>
                        <HiringDesigners/>    
                    </span>
                    <span className='navSpanLeft'>  
                        <SignIn/>
                        <SignUp/>
                    </span>
                </div>
            </div>    
        </div>
    )
}

export default Header;