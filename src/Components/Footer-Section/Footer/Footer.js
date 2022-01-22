import React from 'react';
import './Footer.scss'
import {FooterStatistics} from "../Footer-Statistics/Footer-Statistics";
import {FooterList} from "../Footer-List/Footer-List";
import fooImage from '../../../Assets/Media/soldier.webp'
import exploFooter from '../../../Assets/Media/explo.webp'
import {FooterCoopBtn} from "../Footer-CoopBtn/FooterCoopBtn";
import {FooterSocial} from "../Footer-Social/FooterSocial";
import {FooterMail} from "../Footer-Mail/FooterMail";
import {FooterDescription} from "../Footer-Description/FooterDescription";

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__wrapper">
                <div className="footer__upper">
                    <FooterList/>
                    <FooterStatistics/>
                    <div className="footer__upper-image">
                        <img loading={'lazy'} src={fooImage} alt="soldier"/>
                    </div>
                </div>
                <div className="footer__down">
                    <div className="footer__down-coop">
                        <FooterCoopBtn/>
                        <FooterSocial/>
                        <FooterMail/>
                        <FooterDescription/>
                    </div>
                </div>
                <div className="footer__under-explode-smoke">
                    <img loading={'lazy'} src={exploFooter} alt="картинка_взрыв_декорация"/>
                </div>
            </div>
        </div>
    )
}