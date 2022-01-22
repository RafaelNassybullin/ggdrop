import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CountDownButtonsWrap.scss'
import {CounDownButton} from "../CountDownButton/CountDownButton";
import {ReactComponent as EventIcon} from "../../../Assets/Icons/events-icon.svg";
import {ReactComponent as PresentIcon} from "../../../Assets/Icons/present-logo.svg";

export const CountDownButtonsWrap = () => {
     const arrCounDownButton = [
        {
            icon:<PresentIcon fill={'#A5E2A9'}/>,
            title:'Подарки',
            classNamess:'btn-color-green',
            notty:true
        },
        {
            icon:<EventIcon/>,
            title:'Ивент',
            classNamess:'btn-color-blue',
            notty:false
        }
    ]
    return (
        <div className='count-down-buttons-wrap'>
            {arrCounDownButton.map((el)=>(
                 <CounDownButton key={uuidv4()} icon={el.icon} notty={el.notty} title={el.title} classNamess={el.classNamess}/>
            ))}
        </div>
    )
}