import React from 'react'
import ButtonComponent from './buttonComponent'

const CardComponent=({cardInfo})=>{

    const cardItems = cardInfo.map(item=>{
        return (<li>
                    <div className='card'>
                        <img src={item.image} alt={'#'}></img>
                            <div className='corner'>
                                    <span className='cardText'>
                                        <p>{item.title} <ButtonComponent name={item.etc} class={item.etc}/></p>
                                    </span>
                                    <span className='reactions'>
                                        <p>{item.likes} {item.comments}</p>
                                    </span>
                            </div>
                    </div>
                </li>)
        }   
    );
    return cardItems
}
export default CardComponent