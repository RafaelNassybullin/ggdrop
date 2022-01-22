import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Cases.scss'
import {CaseItem} from "../CaseItem/CaseItem";
import caseDate from '../../../Assets/Media/cases-img/case-date.webp';
import caseGirl from '../../../Assets/Media/cases-img/case-girl.webp';
import caseInsect from '../../../Assets/Media/cases-img/case-insect.webp';
import caseDeer from '../../../Assets/Media/cases-img/case-deer.webp';
import caseSquirel from '../../../Assets/Media/cases-img/case-squirel.webp';
import caseMeat from '../../../Assets/Media/cases-img/case-meat.webp';

export const Cases = () => {
    const arrCases = [
        {img: caseDate, name: 'Прогулка', price: '19', oldPrice: '99'},
        {img: caseGirl, name: 'Обострение', price: '23', oldPrice: '56'},
        {img: caseInsect, name: 'Макро', price: '36', oldPrice: '43'},
        {img: caseDeer, name: 'Ядовитый', price: '86', oldPrice: '98'},
        {img: caseSquirel, name: 'Радуга', price: '44', oldPrice: '53'},
        {img: caseMeat, name: 'Шашлык', price: '78', oldPrice: '83'}
    ]
    return (
        <>
            <div className="cases">
                {
                    arrCases.map(el => (
                        <CaseItem
                            key={uuidv4()}
                            img={el.img}
                            name={el.name}
                            price={el.price}
                            oldPrice={el.oldPrice}/>
                    ))
                }
            </div>
        </>
    )
}