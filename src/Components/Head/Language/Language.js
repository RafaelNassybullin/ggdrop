import React from 'react';
import './Language.scss'
import {ReactComponent as UsFlag} from "../../../Assets/Icons/us-icon.svg";

export const Language = () => {
    return (
        <>
            <div className="language">
                <div className="language__flag">
                    <UsFlag className='language__flag-icon'/>
                </div>
                <p className="language__text">en</p>
            </div>
        </>
    )
}