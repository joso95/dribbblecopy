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
        <div>
            <div className='headerFlexbox'>
                <div className='innerHeader'>
                    <DribbbleHomepage/>
                    <Explore/>
                    <ForDesigners/>
                    <HiringDesigners/>      
                    <SignIn/>
                    <SignUp/>
                </div>
            </div>    
        </div>
    )
}

export default Header;