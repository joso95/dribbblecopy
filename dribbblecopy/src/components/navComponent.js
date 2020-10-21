import React from 'react';

const NavCreation=(props)=>{
    return(
        <li className = 'flexItemNav'><a href={props.name}>{props.name}</a></li>
    )}

export default NavCreation