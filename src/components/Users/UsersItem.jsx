import React from 'react';
import classes from './Users.module.scss';
import { Link } from 'react-router-dom';
import { userFollowTC , userUnfollowTC } from  '../../Redux/actions/users';

export default function UsersItem({ item ,dispatch,followingInProgress}) {
  const userFollowing=(userId,isFollow)=>{
    if(!isFollow){
      userFollow(userId)
    }else{userUnfollow(userId)}
  }

  const userFollow=(userId)=>{
  dispatch( userFollowTC(userId))
  }
  const userUnfollow=(userId)=>{
    dispatch( userUnfollowTC(userId))
  }

  return (
    <div className={classes.users__item}>
      <Link to={'/profile/'+ item.id}>
        <img
          src={
            item.photos.small
              ? item.photos.small
              : 'https://cs9.pikabu.ru/post_img/big/2017/05/27/3/149585459716464607.jpg'
          }
          alt=""
        />
      </Link>

      <div className={classes.users__item__info}>
        <p>name:{item.name} </p>
        <p>status:{item.status ? item.status : 'none'} </p>
        <button onClick={()=> userFollowing(item.id,item.followed)} disabled={followingInProgress.some(userId=> userId === item.id)}>{item.followed ? 'unfollow' : 'folow'}</button>
      </div>
    </div>
  );
}
