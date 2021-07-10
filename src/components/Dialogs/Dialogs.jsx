import React from 'react';
import classes from './Dialogs.module.scss';
import DialogsItem from './DialogsItem';

export default function Dialogs({dialogsData , messagesData}) {
  
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs__users_block}>
        <div className={classes.dialogs__users_block__info}>
          <span>your messages</span>
        </div>
         {
           dialogsData.map(d=>  <DialogsItem dialogsData={d} messagesData={messagesData} key={Math.random()}/>)
         }
      </div>

      <div className={classes.dialogs__message_block}>
        <div className={classes.dialogs__message_block__abcent}>
          <p>no messages yet</p>
        </div>
      </div>
    </div>
  );
}

