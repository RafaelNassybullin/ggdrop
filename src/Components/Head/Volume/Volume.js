import React from 'react';
import './Volume.scss'
import {ReactComponent as VolumeLogo} from "../../../Assets/Icons/volume-logo.svg";

export const Volume = () => {
    return (
        <div className='volume'>
            <VolumeLogo className='volume__icon'/>
            <div className="volume__status">on</div>
        </div>
    )
}