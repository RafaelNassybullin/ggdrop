import React from 'react';
import './BannerMenuItems.scss'

export const BannerMenuItems = ({dataArr}) => {
    return (
        <div className='banner-menu-items'>
            <div className="banner-menu-items__icon">
                {dataArr.icon}
            </div>
            <div className='banner-menu-items__title'>
                {dataArr.title}
                {dataArr.new&&<div className="banner-menu-items__new">new</div>}
            </div>
        </div>
    )
}