import React from 'react'

const CardComponent=({cardInfo})=>{
    const cardItems = cardInfo.map(item=>{
        return (<div className='card'>
                    <img src={item} alt={'#'}></img>
                    <h5>#</h5>
                    <span className='cardText'>
                        cardtext
                    </span>
                </div>)
        }   
    );
    return cardItems
}
export default CardComponent