import React from 'react';
import './BannerCounts.scss'

export const BannerCounts = (props) => {

    const {icons, counts, titles} = props

    return (
        <>
            <div className='banner-counts'>
                <div className="banner-counts__icon">
                    {icons}
                </div>
                <div className="banner-counts__text-wrap">
                    <h3 className="banner-counts__numbers">
                        {counts}
                    </h3>
                    <p className="banner-counts__titles">
                        {titles}
                    </p>
                </div>
            </div>
        </>
    )
}