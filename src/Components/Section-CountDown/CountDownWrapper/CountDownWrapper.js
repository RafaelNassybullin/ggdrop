import React from 'react';
import './CountDownWrapper.scss'
import cFour from '../../../Assets/Media/c-four.webp';
import gg from '../../../Assets/Media/gg.webp';
import smoke from '../../../Assets/Media/smoke.webp';
import {CountDown} from "../CountDown/CountDown";
import {CountDownButtonsWrap} from "../CountDownButtonsWrap/CountDownButtonsWrap";

export const CountDownWrapper = () => {
    return (
        <div className='count-down-wrapper'>
            <div className="count-down-wrapper__block">
                <div className="count-down-wrapper__image-left">
                    <img loading={'lazy'} src={gg} alt="ggdrop"/>
                </div>
                <CountDown/>
                <div className="count-down-wrapper__image-center">
                    <img loading={'lazy'} src={cFour} alt="bomb"/>
                </div>
                <div className="count-down-wrapper__image-right">
                    <img loading={'lazy'} src={smoke} alt="smoke"/>
                </div>
                <CountDownButtonsWrap/>
            </div>
        </div>
    )
}