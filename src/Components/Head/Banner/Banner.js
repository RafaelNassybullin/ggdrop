import React from 'react';
import './Banner.scss'
import {BannerLogo} from "../BannerLogo/BannerLogo";
import {Language} from "../Language/Language";
import {Volume} from "../Volume/Volume";
import {BannerAnalytics} from "../BannerAnalytics/BannerAnalytics";
import {BannerSocial} from "../BannerSocial/BannerSocial";
import {BannerItems} from "../BannerItems/BannerItems";
import {Profile} from "../Profile/Profile";
import {BannerMenu} from "../BannerMenu/BannerMenu";

export const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner__inner">
                <BannerLogo/>
                <div className="banner__side">
                    <div className="banner__inner-up">
                        <div className="banner__inner-stats">
                            <Language/>
                            <Volume/>
                            <BannerAnalytics/>
                        </div>
                        <BannerSocial/>
                    </div>
                <div className="banner__inner-down">
                    <BannerItems/>
                    <div className="banner__menu">
                        <BannerMenu/>
                        <Profile/>
                    </div>
                </div>




                </div>
            </div>
        </div>
    )
}