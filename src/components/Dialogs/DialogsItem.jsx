import React from 'react';

import classes from './Dialogs.module.scss';

export default function DialogsItem({dialogsData,messagesData}) {
  
  return (
    <div className={classes.dialogs__users_block__item}>
      <img src="https://cs9.pikabu.ru/post_img/big/2017/05/27/3/149585459716464607.jpg" alt="" />
      <div className={classes.dialogs__users_block__item__content}>
        <span>{dialogsData.name}</span>
        {messagesData.map((m,id)=> <p key={id}> {id == dialogsData.id && m.message}</p>)}
      </div>
    </div>
  );
}
