import React from 'react';
import './Profile.scss'
import {ProfileNotify} from "../ProfileNotify/ProfileNotify";
import {ProfileUser} from "../ProfileUser/ProfileUser";
import {ProfileRefill} from "../ProfileRefill/ProfileRefill";
import {ProfileExit} from "../ProfileExit/ProfileExit";

export const Profile = () => {

    return (
        <div className='profile'>
            <ProfileNotify/>
            <ProfileUser/>
            <ProfileRefill/>
            <ProfileExit/>
        </div>
    )
}