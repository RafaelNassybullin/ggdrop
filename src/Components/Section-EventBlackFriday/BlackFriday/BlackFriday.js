import React from 'react';
import './BlackFriday.scss';
import blackFriday from '../../../Assets/Media/black-friday.webp';

export const BlackFriday = () => {
    return (
        <div className='black-friday'>
            <div className="black-friday__image">
                <img loading='lazy' src={blackFriday} alt="black-friday"/>
            </div>
            <span className="black-friday__line">{}</span>
        </div>
    )
}