import React from 'react'
import './MainContent.css'
import './Grid.css'
import CardComponent from './cardComponent'
import InfoFromDribbble from './infoForDribbble.json'

const MainContent=()=>{
    return(
        <div className='wrapper'>
            <CardComponent cardInfo={InfoFromDribbble.pictures.thumbnails} alt='#'/>
        </div>
    )
}

export default MainContent