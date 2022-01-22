import React from 'react';
import './Bonuses.scss';
import {ReactComponent as Present} from "../../../Assets/Icons/present-logo.svg";

export const Bonuses = () => {
    return (
        <>
            <a href="/">
                <div className='bonuses'>
                    <div className="bonuses__icon">
                        <Present fill={'#FF94C1'} className="bonuses__svg"/>
                        <div className="bonuses__count">3</div>
                    </div>
                    <p className='bonuses__title'>Bonuses</p>
                </div>
            </a>
        </>
    )
}