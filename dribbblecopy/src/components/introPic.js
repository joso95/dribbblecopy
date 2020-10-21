import React from 'react';


const url = "https://cdn.dribbble.com/assets/art-banners/romainbriaux-db195db2c89f7f239f555901e8578e08987c000329287238e961b378a62a15e5.png"
const IntroPic =()=>{
    return(
        <div className='textNPic'>
            <div className='introImg' >
                <img src={url} width='510px' height='360px'></img>
            </div>
            <span className='credit'>Art by Romain Briaux</span>
        </div>
)}

export default IntroPic