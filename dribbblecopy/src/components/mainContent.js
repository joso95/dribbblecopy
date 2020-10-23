import React from 'react'
import './MainContent.css'
import './Grid.css'
import CardComponent from './cardComponent'
import InfoFromDribbble from './infoForDribbble.json'

const MainContent=()=>{
    return(
        <div className='cardWrapper'>
            <CardComponent cardInfo={InfoFromDribbble.cardContent} alt='#'/>
        </div>
    )
}

export default MainContent