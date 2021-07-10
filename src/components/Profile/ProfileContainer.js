import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Profile from './Profile';
import ProfileLoader from '../../assets/ProfileLoader'
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { getProfileDataTC, getProfileStatusTC } from '../../Redux/actions/profile';
import EditProfile from '../editProfile/EditProfile';

function ProfileContainer({profileData,newPostText,postData,isFetching , dispatch , match ,userId,profileStatus}) {
  React.useEffect(() => {
  if(match.params.userId) {
    userId = match.params.userId
  }
  dispatch(getProfileDataTC(userId))
  dispatch(getProfileStatusTC(userId))
 }, [])
  return (
    <div>
      
      {
        isFetching ?
         <ProfileLoader/>
         :
         <Profile postData={postData} newPostText={newPostText} profileData={profileData} isFetching={isFetching} 
         userId={userId}  dispatch={dispatch} profileStatus={profileStatus} />
      }
    </div>
  );
}

const mapStateToProps = (state) => {  //store.getState()
  return {
    profileData: state.profilePage.profileData,
    newPostText: state.profilePage.newPostText,
    postData: state.profilePage.postData,
    isFetching:state.profilePage.isFetching,
    userId:state.auth.id,
    isFetchingAuth:state.auth.isFetchingAuth,
    isAuth:state.auth.isAuth,
    profileStatus:state.profilePage.status
  };
};
const mapDispatchToProps = (dispatch)=>{   //store.dispatch.bind(store)
    
  return { dispatch }
}
let authRedirectComponent = withAuthRedirect(ProfileContainer)
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(authRedirectComponent));
