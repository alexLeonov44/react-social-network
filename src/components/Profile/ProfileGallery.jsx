import React from 'react'
import classes from './Profile.module.scss';
export default function ProfileGallery() {
    return (
        <div className={classes.profile__wide__block_photos}>
        <div className={classes.profile__wide__block_photos_photo}> 
          <img src="https://html5css.ru/css/img_forest.jpg" alt=""/>
        </div>
        <div className={classes.profile__wide__block_photos_photo}> 
          <img src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg" alt=""/>
        </div>
        <div className={classes.profile__wide__block_photos_photo}> 
          <img src="https://imgd.aeplcdn.com/476x268/n/cw/ec/38904/mt-15-front-view.jpeg?q=80" alt=""/>
        </div>
        <div className={classes.profile__wide__block_photos_photo}> 
          <img src="https://assets-global.website-files.com/6005fac27a49a9cd477afb63/60576840e7d265198541a372_bavassano_homepage_gp.jpg" alt=""/>
        </div>
       
    </div>
    )
}
