import React from 'react';
import './ProfileExit.scss'
import {ReactComponent as ExitIcon} from "../../../Assets/Icons/exit-icon.svg";

export const ProfileExit = () => {

    return (
        <>
            <div className="profile-exit">
                <ExitIcon/>
            </div>
        </>
    )
}