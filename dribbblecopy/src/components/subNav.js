import React from 'react'
import './SubNav.css'
import NavCreation from './navComponent'

const SubNav =()=>{
    return(
        <div className='subNavContainer'>
            <div className='subNavFlex'>
                <div className='filter'>
                    <span className='btn-dropdown'>
                        <p>Popular</p>
                    </span>
                </div>
                <div className='filterCatagories'>
                    <ul className='bars'> 
                           <NavCreation name='Animation'/> 
                           <NavCreation name='Branding'/>
                           <NavCreation name='Illustration'/>
                           <NavCreation name='Mobile'/>
                           <NavCreation name='Print'/>
                           <NavCreation name='Product design'/>
                           <NavCreation name='Typography'/>
                           <NavCreation name='Design'/>
                    </ul>
                </div>
            </div>
        </div>
    )}

export default SubNav