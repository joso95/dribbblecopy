import React from 'react'

const CardComponent =({imgSrc, alt, title,text})=>{
    return(
        <div className='card'>
            <img src={imgSrc} alt={alt}></img>
            <h5>{title}</h5>
            <span className='cardText'>
                {text}
            </span>
        </div>
    )
}

export default CardComponent