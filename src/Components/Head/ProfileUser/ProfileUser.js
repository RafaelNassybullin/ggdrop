import React from 'react';
import './ProfileUser.scss'
import avatar from '../../../Assets/Media/profile-photo.png'

export const ProfileUser = () => {
    return (
        <div className='profile-user'>
            <div className="profile-user__image">
                <img loading={'lazy'} src={avatar} alt="profile-photo"/>
            </div>
            <div className="profile-user__text">
                <p className="profile-user__nickname">
                    Marshmello
                </p>
                <p className="profile-user__balans">
                    306.30 Р
                </p>
            </div>
        </div>
    )
}