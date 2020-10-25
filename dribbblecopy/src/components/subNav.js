import React from 'react'
import './SubNav.css'
import NavCreation from './navComponent'
import InfoFromDribbble from './infoForDribbble.json'
import ButtonComponent from './buttonComponent'

const SubNav =()=>{
    return(
        <div className='subNavContainer'>
            <div className='mobileFilter'>
                <div className='btn-mobile'>
                    <ButtonComponent name='Popular' class='popularBtn'/>
                </div>
                <div className='btn-mobile'>
                    <ButtonComponent name='Filter' class='filterBtn'/>
                </div>
            </div>
            <span className='btn-dropdown'>
                <ButtonComponent name='Popular' class='popularBtn'/>
            </span>

            <div className='subNavFlex'>
                <div className='filter'>  
                </div>
                <div className='filterCatagories'>
                    <ul className='bars'> 
                    <NavCreation navItems={InfoFromDribbble.navigation.filterNavBar}/>
                    </ul>
                </div>
                <div>
                    
                </div>
               
            </div> 
            <span className='btn-dropdown'>
                <ButtonComponent name='Filter' class='filterBtn'/>
            </span>
        </div>
    )}

export default SubNav