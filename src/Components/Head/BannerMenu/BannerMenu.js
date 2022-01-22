import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BannerMenu.scss'
import {BannerMenuItems} from "../BannerMenuItems/BannerMenuItems";
import {ReactComponent as FaqLogo} from "../../../Assets/Icons/faq-logo.svg";
import {ReactComponent as UpgrateLogos} from "../../../Assets/Icons/upgrate-logo.svg";
import {ReactComponent as ContractsLogo} from "../../../Assets/Icons/contracts-logo.svg";
import {ReactComponent as BattlesLogo} from "../../../Assets/Icons/battles-logo.svg";


export const BannerMenu = () => {
    const arrayBannerMenuItems = [
        {
            icon:<FaqLogo/>,
            title:'F.A.Q',
            new:false,
        },
        {
            icon:<UpgrateLogos/>,
            title:'Upgrade',
            new:true,
        },
        {
            icon:<ContractsLogo/>,
            title:'Contracts',
            new:false,
        },
        {
            icon:<BattlesLogo/>,
            title:'Battles',
            new:false,
        },
    ]
    return (
        <div className='banner-menu'>
            {
                arrayBannerMenuItems.map(el=>(
                    <BannerMenuItems key={uuidv4()} dataArr={el}/>
                ))
            }
        </div>
    )
}