import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({profile}) => {

    if (!profile) {
        return <Preloader />
    }
    return (
        <div> 
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large} alt=""/>
                <div>Name: {profile.fullName}</div>
                <div>About me: {profile.aboutMe}</div>
                <div>Contacts: 
                    <div>Facebook: {profile.contacts.facebook}</div>
                    <div>Instagram: {profile.contacts.instagram}</div>
                    <div>twitter: {profile.contacts.twitter}</div>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo