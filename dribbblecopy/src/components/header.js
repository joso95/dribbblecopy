import React from 'react';
import dribbble from './dribbble.png'
import searchIcon from './searchIcon.png'
import './dribbbleLogo.css'
import './Header.css'
import NavCreation from './navComponent'
import NavBarComponent from './navBarComponent'
import InfoFromDribbble from './infoForDribbble.json'
import ButtonComponent from './buttonComponent'
const Header =()=>{
    return(
        <div className='header'>
            <ul className='innerHeader'> 
                <NavBarComponent>
                <img src={dribbble} width='80px' height='76px'/>
                    <NavCreation 
                    navItems = {InfoFromDribbble.navigation.topNavBarLeft}/>
                </NavBarComponent>
                
               
                <NavBarComponent>
                <img src={searchIcon}/>
                    <NavCreation 
                        navItems={InfoFromDribbble.navigation.topNavBarRight} 
                        allignRight={true}/>
                        <ButtonComponent name="Sign up" class='signUp'/>
                </NavBarComponent>
                </ul> 

                <ul className='mobileHeader'>
                <NavBarComponent>
                    <NavCreation 
                    navItems = {InfoFromDribbble.navigation.topMobileBar}/>
                </NavBarComponent>
                </ul> 
        </div>   
    )
}

export default Header;