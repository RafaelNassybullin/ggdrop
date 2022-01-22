import React from 'react';
import './BrandLogo.scss';
import {ReactComponent as GgdropLogo} from "../../../Assets/Icons/ggdrop-logo.svg";

export const BrandLogo = () => {
    return (
        <a href="/">
            <div className='brand-logo'>
                <GgdropLogo  className='brand-logo__svg'/>
            </div>
        </a>
    )
}