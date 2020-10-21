import React from 'react'
import './MainContent.css'
import CreateGrid from './createContentGrid'
import './Grid.css'

const MainContent=()=>{
    return(
        <div className='wrapper'>
            <ol className='grids'>
                <CreateGrid/>
                <CreateGrid/>
            </ol>
        </div>
    )
}

export default MainContent