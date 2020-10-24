import React from 'react'
import ButtonComponent from './buttonComponent'

const CardComponent=({cardInfo})=>{

    const cardItems = cardInfo.map(item=>{
        return (<li>
                    <div className='card'>
                        <img src={item.image} alt={'#'}></img>
                            <div className='corner'>
                                    <span className='cardText'>
                                        <p>{item.title} <ButtonComponent name='TEAM' class="teamButton"/></p>
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