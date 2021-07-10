import React from 'react';
import MyPosts from './myPost/MyPosts';
import classes from './Profile.module.scss';
import ProfileFriendsBlock from './ProfileFriendsBlock';
import ProfileGallery from './ProfileGallery';
import ProfileMainPhoto from './ProfileMainPhoto';
import ProfileInfo from './ProfileInfo';


const Profile = ({postData,dispatch,newPostText,profileData,profileStatus }) => {
  
    return (
        <div className={classes.profile}>

           <div className={classes.profile__narrow__block}>
             <ProfileMainPhoto profileDataPhotos={profileData.photos}/>
              <ProfileFriendsBlock />
           </div>
           
           <div className={classes.profile__wide__block}>        
           
              <ProfileInfo profileStatus={profileStatus} profileData={profileData} dispatch={dispatch}/>
              <ProfileGallery/>
               
               <MyPosts postData={postData} newPostText={newPostText} dispatch={dispatch} profileData={profileData}/>
           </div>

        </div>

    )
}

export default Profile