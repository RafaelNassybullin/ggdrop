import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './FooterSocial.scss'
import {ReactComponent as TelegramIcon} from "../../../Assets/Icons/telegram-icon.svg";
import {ReactComponent as VkIcon} from "../../../Assets/Icons/vk-icon.svg";
import {ReactComponent as InstagramIcon} from "../../../Assets/Icons/instagramm-icon.svg";
import {ReactComponent as YouTubeIcon} from "../../../Assets/Icons/youtube-icon.svg";
import {ReactComponent as TikTokIcon} from "../../../Assets/Icons/tiktok-icons.svg";

export const FooterSocial = () => {

    const arraySocialLinks = [
        {
            link: '/',
            socialLogo: <TelegramIcon width={28}/>
        },
        {
            link: '/',
            socialLogo: <VkIcon width={28}/>
        },
        {
            link: '/',
            socialLogo: <InstagramIcon width={28}/>
        },
        {
            link: '/',
            socialLogo: <YouTubeIcon width={28}/>
        },
        {
            link: '/',
            socialLogo: <TikTokIcon width={28}/>
        },
    ]
    return (
        <div className='footer-social'>
            {arraySocialLinks.map(el=>(
             <a key={uuidv4()} className='social-links' href={el.link}>{el.socialLogo}</a>
            ))}
        </div>
    )
}