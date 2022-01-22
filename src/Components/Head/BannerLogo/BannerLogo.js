import React from 'react';
import './BannerLogo.scss';
import {BrandLogo} from "../BrandLogo/BrandLogo";
import {Bonuses} from "../Bonuses/Bonuses";

export const BannerLogo = () => {

    return (
        <>
            <div className='banner-logo'>
                <BrandLogo/>
                <Bonuses/>
            </div>
        </>
    )
}