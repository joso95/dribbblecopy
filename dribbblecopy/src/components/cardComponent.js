import React from 'react'

const CardComponent=({cardInfo})=>{
    const card = Object.keys(cardInfo)
    const cardObj = Object.keys(card)

    const cardItems = cardObj.map(item=>{
        return (<div className='card'>
                    <img src={item} alt={'#'}></img>
                    <span className='cardText'>
                        <h5>#</h5>
                        cardtext
                    </span>
                </div>)
        }   
    );
    return cardItems
}
export default CardComponent