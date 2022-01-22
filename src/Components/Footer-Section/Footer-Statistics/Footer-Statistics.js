import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Footer-Statistics.scss'
import {ReactComponent as FooterKeyIcon} from "../../../Assets/Icons/footer-key.svg";
import {ReactComponent as FooterPlayersIcon} from "../../../Assets/Icons/footer-players.svg";
import {ReactComponent as FooterContractsIcon} from "../../../Assets/Icons/footer-contracts.svg";
import {ReactComponent as FooterUpgradesIcon} from "../../../Assets/Icons/footer-upgrade.svg";

export const FooterStatistics = () => {
    const arrayFooterStatistics = [
        {icon: <FooterKeyIcon/>, counts: '431 182 539', name: 'Открыто кейсов'},
        {icon: <FooterPlayersIcon/>, counts: '3 725 362', name: 'Игроков'},
        {icon: <FooterContractsIcon/>, counts: '5 626 767', name: 'Контрактов'},
        {icon: <FooterUpgradesIcon/>, counts: '3 182 539', name: 'Апргрейдов'}
    ]
    return (
        <div className='footer-statistics'>
            <div className="footer-statistics__items">
                    {
                        arrayFooterStatistics.map(el => (

                            <div key={uuidv4()} className="footer-statistics__item">
                                <div className="footer-statistics__item-icon">
                                    {el.icon}
                                </div>
                                <div className="footer-statistics__item-titles">
                                    <p className="numbers">{el.counts}</p>
                                    <p className='titles'>{el.name}</p>
                                </div>
                            </div>

                        ))
                    }
            </div>
        </div>
    )
}