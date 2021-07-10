import { ProfileDataAPI } from "../../api/api";
import { GET_PROFILE_DATA, SET_FETCHING_PROFILE_DATA, SET_PROFILE_STATUS } from "../types";
import { setProfilePhoto } from "./auth";


//profile
export const getProfileDataAC = (profileData) => ({ type: GET_PROFILE_DATA, profileData });
export const setFetchingProfileData = (isFetching) => ({
  type: SET_FETCHING_PROFILE_DATA,
  isFetching,
});
export const setProfileStatus = (status) => ({ type: SET_PROFILE_STATUS, status });

export const getProfileDataTC = (userId) => {
    return (dispatch) => {
      dispatch(setFetchingProfileData(true));
      ProfileDataAPI.getProfileData(userId).then((data) => {
        dispatch(getProfileDataAC(data));
        dispatch(setFetchingProfileData(false));
      });
    };
  };
export const updateProfileInfoTC = (newProfileData) => {
    return (dispatch,getState) => {
      let userId = getState().auth.id
      ProfileDataAPI.setProfileInfo(newProfileData).then(data=>{
        if(data.resultCode === 0){
          getProfileDataTC(userId)
        }else(alert(data.messages))
      })
      
    };
  };
  export const getProfileStatusTC = (userId) => {
    return (dispatch) => {
      ProfileDataAPI.getProfileStatus(userId).then((status) => dispatch(setProfileStatus(status)));
    };
  };
  export const updateProfileStatusTC = (statusValue) => {
    return (dispatch) => {
      ProfileDataAPI.updateProfileStatus(statusValue).then((data) => {
        if (data.resultCode === 0) {
          dispatch(setProfileStatus(statusValue));
        } else {
          alert('something went wrong');
        }
      });
    };
  };
  export const changeProfilePhotoTC = (photo) => {
    return (dispatch) => {
      ProfileDataAPI.changeProfilePhoto(photo).then((data) => {
        if (data.resultCode === 0) {
        dispatch(setProfilePhoto(data.data.photos.small))
        } else {
          alert('something went wrong');
        }
      });
    };
  };