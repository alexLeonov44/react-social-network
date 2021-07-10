import React from 'react';
import classes from './Profile.module.scss';
import ProfileStatus from './ProfileStatus';

export default function ProfileInfo({ profileStatus, profileData, dispatch }) {
  
  const [profileVisibleStatus, setProfileVisibleStatus] = React.useState(false);
  const [toggleContactsList, setToggleContactsList] = React.useState(false);

  const statusPopupRef = React.useRef();
  const setProfileStatusPopup = () => {
    setProfileVisibleStatus(true);
  };
  const handleOutsideClick = (e) => {
    if (!e.path.includes(statusPopupRef.current)) {
      setProfileVisibleStatus(false);
    }
  };
  const setContactsList = () => {
    setToggleContactsList(list=> !list)
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className={classes.profile__wide__block__info}>
      <div ref={statusPopupRef} className={classes.profile__wide__block__info_name}>
        <h1>{profileData.fullName}</h1>
        {profileVisibleStatus && (
          <ProfileStatus setProfileVisibleStatus={setProfileVisibleStatus} dispatch={dispatch} />
        )}
        <span onClick={() => setProfileStatusPopup()}>
          {profileStatus ? profileStatus : 'Add status'}
        </span>
      </div>

      <div>
        Ищу работу:<p>{profileData.lookingForAJob ? 'Да' : 'Нет'}</p>
      </div>
      <div>
        Мои навыки:<p>{profileData.lookingForAJobDescription}</p>
      </div>
      <div>
        О себе:<p>{profileData.aboutMe}</p>
      </div>
      <span onClick={()=> setContactsList()} className={classes.profile__wide__block__info__contactsButton}>Contacts</span>
      {toggleContactsList && (
          <>
        <div>
          GitHub:<p>{profileData.contacts.github ? profileData.contacts.github : 'нет'}</p>
        </div>
        <div>
          Vkontakte:<p>{profileData.contacts.vk ? profileData.contacts.vk : 'нет'}</p>
        </div>
        </>
      ) }
    </div>
  );
}
