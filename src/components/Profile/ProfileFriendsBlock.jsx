import React from 'react';

import classes from './Profile.module.scss';

export default function ProfileFriendsBlock() {
  return (
    <div className={classes.profile__narrow__block__friends}>
      <div className={classes.profile__narrow__block__friends__cell}>
        <img src="https://html5css.ru/css/img_forest.jpg" alt="" />
        <p>name</p>
      </div>
      <div className={classes.profile__narrow__block__friends__cell}>
        <img src="https://html5css.ru/css/img_forest.jpg" alt="" />
        <p>name</p>
      </div>
      <div className={classes.profile__narrow__block__friends__cell}>
        <img src="https://html5css.ru/css/img_forest.jpg" alt="" />
        <p>name</p>
      </div>
    </div>
  );
}
