import React from 'react';
import './CountDownButton.scss'

export const CounDownButton = ({icon, title, classNamess, notty}) => {
    return (
        <button className={'count-down-button ' + classNamess }>
            {title}
            <span className="count-down-button__icon">
                {notty&&<span className="count-down-button__icon-notty">{}</span>}
                {icon}
            </span>
        </button>
    )
}