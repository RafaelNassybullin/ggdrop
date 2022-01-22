import React from 'react';
import './FooterMail.scss'
import {ReactComponent as EmailIcon} from "../../../Assets/Icons/email-icon.svg";


export const FooterMail = () => {
    return (
        <a href="mailto:support@ggdrop.com">
            <button className="footer-mail__button">
               <span className="footer-mail__icon">
                 <EmailIcon/>
                </span>
                support@ggdrop.com
            </button>
        </a>
    )
}