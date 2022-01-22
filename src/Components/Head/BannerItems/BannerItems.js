import React from 'react';
import './BannerItems.scss'
import { v4 as uuidv4 } from 'uuid';
import {BannerItem} from "../BannerItem/BannerItem";
import gunImage1 from '../../../Assets/Media/guns/1.webp';
import gunImage2 from '../../../Assets/Media/guns/2.webp';
import gunImage3 from '../../../Assets/Media/guns/3.webp';
import gunImage4 from '../../../Assets/Media/guns/4.webp';
import gunImage5 from '../../../Assets/Media/guns/5.webp';
import gunImage6 from '../../../Assets/Media/guns/6.webp';
import gunImage7 from '../../../Assets/Media/guns/7.webp';
import gunImage8 from '../../../Assets/Media/guns/8.webp';
import gunImage9 from '../../../Assets/Media/guns/9.webp';
import gunImage10 from '../../../Assets/Media/guns/10.webp';
import gunImage11 from '../../../Assets/Media/guns/11.webp';
import gunImage12 from '../../../Assets/Media/guns/12.webp';
import gunImage13 from '../../../Assets/Media/guns/13.webp';
import gunImage14 from '../../../Assets/Media/guns/14.webp';
import gunImage15 from '../../../Assets/Media/guns/15.webp';
import gunImage16 from '../../../Assets/Media/guns/16.webp';

import blueIcon from '../../../Assets/Media/colorIcon/blue.png';
import grayIcon from '../../../Assets/Media/colorIcon/gray.png';
import lightblue from '../../../Assets/Media/colorIcon/lightblue.png';
import red from '../../../Assets/Media/colorIcon/red.png';
import violet from '../../../Assets/Media/colorIcon/violet.png';
import yellow from '../../../Assets/Media/colorIcon/yellow.png';


export const BannerItems = () => {
    const arrrayBannerItems = [
        {
            gunImage:gunImage1,
            gun:'Mac-10',
            gunName:'Glacier Mesh',
            icon: violet,
            colorClassName:' violet',
        },
        {
            gunImage:gunImage2,
            gun:'Spectral Shiv',
            gunName:'Copper',
            icon: red,
            colorClassName:' red',
        },
        {
            gunImage:gunImage3,
            gun:'Tec-9',
            gunName:'Gunsmoke',
            icon: yellow,
            colorClassName:' yellow',
        },
        {
            gunImage:gunImage4,
            gun:'MP7',
            gunName:'Dark Age',
            icon: yellow,
            colorClassName:' yellow',
        },
        {
            gunImage:gunImage5,
            gun:'Ak-47',
            gunName:'Jungle Tiger',
            icon: grayIcon,
            colorClassName:' gray',
        },
        {
            gunImage:gunImage6,
            gun:'Talon Knife',
            gunName:'Jungle Tiger',
            icon: grayIcon,
            colorClassName:' gray',
        },
        {
            gunImage:gunImage7,
            gun:'Talon Knife',
            gunName:blueIcon,
            icon: lightblue,
            colorClassName:' lightblue',
        },
        {
            gunImage:gunImage8,
            gun:'Ak-47',
            gunName:'Hive',
            icon: lightblue,
            colorClassName:' lightblue',
        },
        {
            gunImage:gunImage9,
            gun:'Five-SeveN',
            gunName:'Vulcan',
            icon: yellow,
            colorClassName:' yellow',
        },
        {
            gunImage:gunImage10,
            gun:'Galil AR',
            gunName:'Tornado',
            icon: violet,
            colorClassName:' violet',
        },
        {
            gunImage:gunImage11,
            gun:'Ursus Knife',
            gunName:'Sand Mesh',
            icon: yellow,
            colorClassName:' yellow',
        },
        {
            gunImage:gunImage12,
            gun:'Huntsman Knife',
            gunName:'Desert Warfare',
            icon: red,
            colorClassName:' red',
        },
        {
            gunImage:gunImage13,
            gun:'XM1014',
            gunName:'Blind Spot',
            icon: blueIcon,
            colorClassName:' blue',
        },
        {
            gunImage:gunImage14,
            gun:'Ak-47',
            gunName:'Hive',
            icon: red,
            colorClassName:' red',
        },
        {
            gunImage:gunImage15,
            gun:'Five-SeveN',
            gunName:'Blind Spot',
            icon: blueIcon,
            colorClassName:' blue',
        },
        {
            gunImage:gunImage16,
            gun:'Galil AR',
            gunName:'Desert Warfare',
            icon: blueIcon,
            colorClassName:' blue',
        },
    ]
    return (
        <ul className='banner-items'>
            {arrrayBannerItems.map(el=>(
                <BannerItem
                    key={uuidv4()}
                    gunImage={el.gunImage}
                    gun={el.gun}
                    gunName={el.gunName}
                    icon={el.icon}
                    colorClassName={el.colorClassName}

                />
            ))}
        </ul>
    )
}