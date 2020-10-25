import React from 'react'
import '../css/MainContent.css'
import '../css/Grid.css'
import CardComponent from '../js/cardComponent'
import CardContent from '../json/cardContent.json'

const MainContent=()=>{
    return(
        <div className='cardWrapper'>
            <ol className="windowList">
            <CardComponent cardInfo={CardContent.cards}/>
            </ol>
        </div>
    )
}

export default MainContent