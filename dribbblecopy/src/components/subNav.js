import React from 'react'
import './SubNav.css'

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
                        <li>
                            <a>animation</a>
                        </li>
                        <li>
                            <a>branding</a>
                        </li>
                        <li>
                            <a>illustration</a>
                        </li>
                        <li>
                            <a>mobile</a>
                        </li>
                        <li>
                            <a>print</a>
                        </li>
                        <li>
                            <a>product design</a>
                        </li>
                        <li>
                            <a>typography</a>
                        </li>
                        <li>
                            <a>web design</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )}

export default SubNav