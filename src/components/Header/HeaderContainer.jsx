import React from 'react';
import { connect } from 'react-redux';
import { getProfilePhotoTC, logoutUserTC } from '../../Redux/actions/auth';
import Header from './Header';

const HeaderContainer = ({ dispatch ,profilePhoto,profileId,userName,isAuth}) => {

  React.useEffect(() => {
  dispatch(getProfilePhotoTC(profileId))
  }, [profileId]);

  const logoutUser=()=>{
    dispatch(logoutUserTC())
  }
  return <Header profilePhoto={profilePhoto} userName={userName} isAuth={isAuth} logoutUser={logoutUser}/>;
};

let mapStateToProps = (state) => ({
  profilePhoto:state.auth.profilePhoto,
  profileId:state.auth.id,
  userName:state.auth.login,
  isAuth:state.auth.isAuth
});
let mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
