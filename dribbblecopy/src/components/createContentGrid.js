import React from 'react'
import CreateBox from './createBox'
import SpaceInGrid from './createSpaceGrid'

const CreateGrid =()=>{
    return(
        <div class="outer-container">
            <SpaceInGrid/>
            <CreateBox/>
            <SpaceInGrid/>
        </div>
    )

}

export default CreateGrid