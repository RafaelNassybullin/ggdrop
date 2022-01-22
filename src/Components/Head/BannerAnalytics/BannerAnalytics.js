import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BannerAnalytics.scss'
import {BannerCounts} from "../BannerCounts/BannerCounts";
import {ReactComponent as OnlineIcon} from "../../../Assets/Icons/online-logo.svg";
import {ReactComponent as CasesIcon} from "../../../Assets/Icons/cases-logo.svg";
import {ReactComponent as ContractsIcon} from "../../../Assets/Icons/contracts-logo.svg";
import {ReactComponent as UpgrateLogo} from "../../../Assets/Icons/upgrate-logo.svg";
import {ReactComponent as BattlesLogo} from "../../../Assets/Icons/battles-logo.svg";
import {ReactComponent as UsersLogo} from "../../../Assets/Icons/users-logo.svg";

export const BannerAnalytics = () => {
    const arrayBannerAnalytics = [
        {
            icons: <OnlineIcon className='overlay-shadow-anim'/>,
            counts: '3 890',
            titles: 'Online'
        },
        {
            icons: <CasesIcon/>,
            counts: '506 860',
            titles: 'Cases open'
        },
        {
            icons: <ContractsIcon fill={'#FFBD98'}/>,
            counts: '46 809',
            titles: 'contracts'
        },
        {
            icons: <UpgrateLogo fill={'#FFBD98'}/>,
            counts: '109 088',
            titles: 'Upgrades'
        },
        {
            icons: <BattlesLogo fill={'#FFBD98'}/>,
            counts: '30 899',
            titles: 'battles'
        },
        {
            icons: <UsersLogo/>,
            counts: '1 068 448',
            titles: 'users'
        },
    ]
    return (
        <div className='banner-analytics'>
            {arrayBannerAnalytics.map(el => (
                <BannerCounts
                    key={uuidv4()}
                    icons={el.icons}
                    counts={el.counts}
                    titles={el.titles}
                />
            ))}
        </div>
    )
}