import React from 'react';
import './ProfileNotify.scss'
import {ReactComponent as NotifyIcon} from "../../../Assets/Icons/notifications-logo.svg";

export const ProfileNotify = () => {
    return (
        <div className='notify'>
            <div className="notify__icon">
                <NotifyIcon/>
            </div>
            <span className="notify__count">0</span>
        </div>
    )
}


