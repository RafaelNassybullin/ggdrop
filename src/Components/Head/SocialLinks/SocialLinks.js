import React from 'react';
import './SocialLinks.scss'

export const SocialLinks = ({link, children}) => {
    return (
        <a className='social-links' href={link}>{children}</a>
    )
}