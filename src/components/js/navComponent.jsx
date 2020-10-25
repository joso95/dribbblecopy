import React from 'react';

const NavCreation=({navItems, allignRight})=>{
    allignRight = allignRight == true;

    if(allignRight){
        const headerItems = navItems.map(item=>{
            return (<li className = 'flexItemNav'>
                        <a href='#'>{item}</a>
                    </li>)
        }   
    );
}

    const headerItems = navItems.map(item=>{
        return (<li className = 'flexItemNav'><a href='#'>{item}</a></li>)
        }   
    );
    return headerItems
}
export default NavCreation