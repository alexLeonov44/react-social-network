import React from 'react';
import classes from './Navbar.module.scss';
// import envelopeSVG from '../../assets/img/envelope-regular.svg'
import {Link, NavLink} from "react-router-dom";

const Navbar = ({ items }) => {
  return (
    <ul className={classes.nav}>
        {/* <img src={envelopeSVG} alt=""/> */}
      <li  className={classes.nav__item}> <NavLink to="/profile">profile</NavLink></li>   
      <li  className={classes.nav__item}> <Link to="/dialogs">dialog</Link></li>
      <li  className={classes.nav__item}><Link to="/users">users</Link></li>
      <li  className={classes.nav__item}>news</li>
      <li  className={classes.nav__item}>wether</li>
      <li  className={classes.nav__item}>setting</li>
    
    </ul>
  );
};

export default Navbar;
