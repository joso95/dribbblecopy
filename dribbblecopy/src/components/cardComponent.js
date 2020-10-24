import React from 'react'

const CardComponent=({cardInfo})=>{

    const cardItems = cardInfo.map(item=>{
        return (<li>
                    <div className='card'>
                        <img src={item.image} alt={'#'}></img>
                            <div className='corner'>
                                    <span className='cardText'>
                                        <p>{item.title} TEAM</p> 
                                    </span>
                                    <span className='reactions'>
                                        <p>22 33</p>
                                    </span>
                            </div>
                    </div>
                </li>)
        }   
    );
    return cardItems
}
export default CardComponent