import React from 'react';
import './Footer-List.scss'

export const FooterList = () => {
    return (
        <div className='footer-list'>
            <div className="footer-list__head">
                <h2 className="footer-list__head-title">© 2018-2021 GGDROP</h2>
                <p className="footer-list__head-best">Лучший опенкейс CS:GO</p>
            </div>
            <ul className='footer-list__items'>
                <li className="footer-list__item"><a href="/">Пользовательское соглашение</a></li>
                <li className="footer-list__item"><a href="/">Соглашение о приватности</a></li>
                <li className="footer-list__item"><a href="/">Контакты</a></li>
                <li className="footer-list__item"><a href="/">FAQ</a></li>
            </ul>
        </div>
    )
}