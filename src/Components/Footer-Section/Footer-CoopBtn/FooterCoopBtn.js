import React from 'react';
import './FooterCoopBtn.scss'
import {ReactComponent as CoopIcon} from "../../../Assets/Icons/footer-coop-icon.svg";

export const FooterCoopBtn = () => {

    return (
        <button className='footer-coop-btn'>
            <p className="footer-coop-btn__title">
                Сотрудничество
            </p>
            <span className="footer-coop-btn__icon">
               <CoopIcon/>
            </span>
        </button>
    )
}