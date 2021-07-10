import React, { useState } from 'react';
import { onChangePostTextAC, postSubmitAC } from '../../../Redux/profile-reduser';

import classes from './MyPosts.module.scss';
import Post from './Post';

import { Form, Field } from 'react-final-form'


export default function MyPosts({ postData, newPostText, dispatch ,profileData}) {

  const setInputValue = (e) => {
    dispatch(onChangePostTextAC(e.target.value));
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
    dispatch(postSubmitAC())
     
    }
  };

  

  return (
    <div className={classes.my_posts}>
      <div className={classes.my_posts__input_area}>
        <div className={classes.my_posts__input_area__img}>
          <img
            src={profileData.photos ? profileData.photos.small : "https://cs9.pikabu.ru/post_img/big/2017/05/27/3/149585459716464607.jpg"}
            alt=""
          />
        </div>
       
        <input
          onChange={(e) => setInputValue(e)}
          type="text"
          placeholder="some text"
          value={newPostText}
          onKeyDown={handleKeyDown}
        />
      </div>
      <Post postData={postData} profileData={profileData}/>
    </div>
  );
}
