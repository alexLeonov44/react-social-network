import React from 'react'
import classes from './Profile.module.scss';

import {Link, Redirect} from "react-router-dom";

export default function ProfileMainPhoto({profileDataPhotos}) {
  
    return (
        <div className={classes.profile__narrow__block__photo}>
        {
          profileDataPhotos && profileDataPhotos.large ?
          <img src={profileDataPhotos.large} alt=""/>
          :
          <img src="https://cs9.pikabu.ru/post_img/big/2017/05/27/3/149585459716464607.jpg" alt=""/>
        }                
          <p><Link to="/editProfile">Edit</Link></p>
         
      </div>
    )
}
