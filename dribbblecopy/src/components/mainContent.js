import React from 'react'
import './MainContent.css'
import './Grid.css'
import CardComponent from './cardComponent'

const MainContent=()=>{
    return(
        <div className='wrapper'>
            <CardComponent imgSrc='#' alt='#' title='yes' text='no'/>
            <CardComponent imgSrc='#' alt='#' title='yes' text='no'/>
        </div>
    )
}

export default MainContent