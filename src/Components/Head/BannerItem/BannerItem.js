import React from 'react';
import './BannerItem.scss'
import caseImages from '../../../Assets/Media/caseImage.png'
export const BannerItem = (props) => {

    const {
        gunImage,
        gun,
        gunName,
        icon,
        colorClassName,
    } = props

    return (
        <li className='banner-item'>
            <div className="banner-item__image">
                <img loading={'lazy'} src={gunImage} alt="guns"/>
            </div>
            <div className="banner-item__title">
                <p className="banner-item__gun">{gun}</p>
                <p className="banner-item__gun-name">{gunName}</p>
            </div>
            <div className={"banner-item__background" + colorClassName}>
                <div className="image">
                    <img loading='lazy' src={icon} alt=""/>
                </div>
            </div>
            <span className={"banner-item__line" + colorClassName}>{}</span>
            <div className="banner-item__hover">
                <div className="banner-item__hover-image">
                    <img loading={'lazy'} src={caseImages} alt="case"/>
                </div>
                <p className="banner-item__hover-title">
                    Marshmello
                </p>
            </div>
        </li>
    )
}