import React from 'react'
import './SubNav.css'
import NavCreation from './navComponent'
import InfoFromDribbble from './infoForDribbble.json'

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
                    <NavCreation navItems={InfoFromDribbble.navigation.filterNavBar}/>
                    </ul>
                </div>
                <div>
                    <span>
                        <p>Filter</p>
                    </span>
                </div>
            </div>
        </div>
    )}

export default SubNav