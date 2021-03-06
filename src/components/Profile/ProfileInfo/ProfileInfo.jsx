import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import { ProfileStatus } from './ProfileStatus';
import s from './ProfileInfo.module.css';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300" />
      </div>
      <div className={s.descriptionBlock}>
        {profile.photos.large ? (
          <div className={s.photo}>
            <img src={profile.photos.large} alt="" />
          </div>
        ) : (
          <div className={s.photo}>
            <img src="https://prvera.ru/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" />
          </div>
        )}
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <div>Name: {profile.fullName}</div>
        <div>About me: {profile.aboutMe}</div>
        <div>
          Contacts:
          <div>Facebook: {profile.contacts.facebook}</div>
          <div>Instagram: {profile.contacts.instagram}</div>
          <div>twitter: {profile.contacts.twitter}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
