import React from 'react';

import classes from './MyPosts.module.scss';

export default function Post({postData,profileData}) {
  return (
    <>
      {postData.map((posts) => {
        return (
          <div key={posts.id} className={classes.my_posts__post}>
            <div className={classes.my_posts__post__info}>
            <img
              src={profileData.photos ? profileData.photos.small : "https://cs9.pikabu.ru/post_img/big/2017/05/27/3/149585459716464607.jpg"}
              alt="" />
              <p>alex leonov</p>
            </div>
              <div className={classes.my_posts__post__content}>
                <p>{posts.post}</p>
              </div>
              <div className={classes.my_posts__post__like_cont}>
                <div>like {posts.like}</div>
                <div>viev  {posts.viev}</div>
              </div>
          </div>
        );
      })}
    </>
  );
}
