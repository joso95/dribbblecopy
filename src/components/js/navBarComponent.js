import React from 'react'

const NavBarComponent=(props)=>{
    return(
            <div className='headerFlexbox'>
                <span className='navSpan'>
                    {props.children}
                </span>
            </div>
    )
}

export default NavBarComponent