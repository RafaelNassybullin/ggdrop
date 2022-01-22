import React from 'react';
import './CaseItem.scss'
export const CaseItem = ({img, name, price, oldPrice}) => {

    return (
        <div className='case-item'>
            <div className="case-item__image">
                <img loading={'lazy'} src={img} alt="case-item"/>
            </div>
            <div className="case-item__prices">
                <div className='case-item__actual-price'>
                    <p>{price}P</p>
                </div>
                <div className='case-item__old-price'>
                <p>{oldPrice}P</p>
                </div>
            </div>
            <div className="case-item__title">
                <p className='case-item__p'>{name}</p>
            </div>
        </div>
    )
}