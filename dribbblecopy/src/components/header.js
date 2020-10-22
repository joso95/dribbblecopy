import React from 'react';
import dribbble from './dribbble.png'
import './dribbbleLogo.css'
import './Header.css'
import NavCreation from './navComponent'
import NavBarComponent from './navBarComponent'
import InfoFromDribbble from './infoForDribbble.json'

const Header =()=>{
    return(
        <div className='header'>
            <ul className='innerHeader'> 
                <NavBarComponent>
                <img src={dribbble} width='80px' height='76px'/>
                    <NavCreation 
                    navItems = {InfoFromDribbble.content.topNavBarLeft}/>
                </NavBarComponent>
                
                <NavBarComponent>
                    <NavCreation 
                        navItems={InfoFromDribbble.content.topNavBarRight} 
                        allignRight={true}/>
                </NavBarComponent>
                </ul> 
                </div>   
    )
}

export default Header;