import React from 'react';
import './ProfileRefill.scss'
import {ReactComponent as WalletLogo} from "../../../Assets/Icons/wallet-logo.svg";

export const ProfileRefill = () => {
    return (
        <div className='profile-refill'>
            <p className='profile-refill__title'>Refill</p>
            <div className="profile-refill__icon">
                <WalletLogo/>
            </div>
        </div>
    )
}