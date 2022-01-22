import React from 'react';
import './BannerSocial.scss'
import { v4 as uuidv4 } from 'uuid';
import {ReactComponent as TelegramIcon} from "../../../Assets/Icons/telegram-icon.svg";
import {ReactComponent as VkIcon} from "../../../Assets/Icons/vk-icon.svg";
import {ReactComponent as InstagramIcon} from "../../../Assets/Icons/instagramm-icon.svg";
import {ReactComponent as YouTubeIcon} from "../../../Assets/Icons/youtube-icon.svg";
import {ReactComponent as TwitterIcon} from "../../../Assets/Icons/twitter-icon.svg";
import {ReactComponent as FacebookIcon} from "../../../Assets/Icons/facebook-icon.svg";
import {ReactComponent as TikTokIcon} from "../../../Assets/Icons/tiktok-icons.svg";
import {SocialLinks} from "../SocialLinks/SocialLinks";



export const BannerSocial = () => {
const arraySocialLinks = [
        {
            link: '/',
            socialLogo: <TelegramIcon/>
        },
        {
            link: '/',
            socialLogo: <VkIcon/>
        },
        {
            link: '/',
            socialLogo: <InstagramIcon/>
        },
        {
            link: '/',
            socialLogo: <YouTubeIcon/>
        },
        {
            link: '/',
            socialLogo: <TwitterIcon/>
        },
        {
            link: '/',
            socialLogo: <FacebookIcon/>
        },
        {
            link: '/',
            socialLogo: <TikTokIcon/>
        },
    ]
    return (
        <div className="banner-social">
            {arraySocialLinks.map((el)=>(
                <SocialLinks key={uuidv4()} link={el.link}>{el.socialLogo}</SocialLinks>
            ))}
        </div>
    )
}