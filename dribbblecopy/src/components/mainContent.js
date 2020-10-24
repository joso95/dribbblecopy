import React from 'react'
import './MainContent.css'
import './Grid.css'
import CardComponent from './cardComponent'
import CardContent from './cardContent.json'

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