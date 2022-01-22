import React from 'react';
import './CountDown.scss'
import {ReactComponent as TimeIcon} from "../../../Assets/Icons/time-icon.svg";


export const CountDown = () => {
    return (
        <div className='count-down'>
            <div className="count-down__icon">
                <TimeIcon/>
            </div>
            <div className="count-down__days">
                <p>21 день</p>
            </div>
            <div className="count-down__timers">
                <div className="count-down__timer hours">
                    <p className="count-down__number">2</p>
                    <p className="count-down__number">2</p>
                    :
                </div>
                <div className="count-down__timer minutes">
                    <p className="count-down__number">4</p>
                    <p className="count-down__number">5</p>:
                </div><div className="count-down__timer seconds">
                    <p className="count-down__number">1</p>
                    <p className="count-down__number">7</p>
                </div>
            </div>
        </div>
    )
}