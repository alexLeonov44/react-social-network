import React from 'react';
import classes from './EditProfile.module.scss';

import { useDispatch } from 'react-redux';
import { changeProfilePhotoTC, updateProfileInfoTC } from '../../Redux/actions/profile';

import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export default function EditProfile() {
  const userId = useSelector(({ auth }) => auth.id);
  const { aboutMe, fullName, lookingForAJob, lookingForAJobDescription } = useSelector(
    ({ profilePage }) => profilePage.profileData,
  );
  console.log(aboutMe, fullName, lookingForAJob, lookingForAJobDescription);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ aboutMe, fullName, lookingForAJob, lookingForAJobDescription }, ...data) => {
    let newProfileData = {
      userId: userId,
      aboutMe: aboutMe,
      fullName: fullName,
      lookingForAJob: lookingForAJob,
      lookingForAJobDescription: lookingForAJobDescription,
    };
    dispatch(updateProfileInfoTC(newProfileData));
  };

  const dispatch = useDispatch();

  const onPhotoSelected = (e) => {
    let photo = e.target.files[0];
    if (e.target.files[0]) {
      dispatch(changeProfilePhotoTC(photo));
    }
  };

  return (
    <div className={classes.editProfile}>
      <p> Edit Main Photo </p>
      <div className={classes.editProfile__mainPhoto}>
        <input type="file" onChange={onPhotoSelected} />
      </div>

      <p> Edit profile information </p>
      <div className={classes.editProfile__info}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={fullName} placeholder="name" {...register('fullName', { required: true })} />
          {errors.fullName && <span>This field name is required</span>}

          <input
            defaultValue={lookingForAJobDescription} placeholder="Skills"
            {...register('lookingForAJobDescription', { required: false })}
          />

          <input defaultValue={aboutMe} placeholder="aboutMe" {...register('aboutMe', { required: false })} />

          <div className={classes.editProfile__info_lookingForAJob}>
            <span> Ищу работу </span>
            <input
              type="checkbox"
              defaultValue={true}
              {...register('lookingForAJob', { required: false })}
            />
          </div>

          <p> Contacts </p>

          <input defaultValue="GitHub" {...register('github', { required: false })} />

          <input defaultValue="VK" {...register('vk', { required: false })} />

          <input className={classes.editProfile__submit} type="submit" />
        </form>
      </div>
    </div>
  );
}
