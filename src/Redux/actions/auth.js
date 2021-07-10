import { getAuthAPI } from "../../api/api";
import { GET_AUTH_DATA, LOGOUT_USER, SET_FETCHING_AUTH, SET_PROFILE_PHOTO } from "../types";

//AUTH
export const getAuthDataAC = (id, email, login, isAuth) => ({
    type: GET_AUTH_DATA,
    authData: { id, email, login, isAuth },
  });
  export const setFetchingAuthData = (isFetching) => ({ type: SET_FETCHING_AUTH, isFetching });
  export const setProfilePhoto = (photo) => ({ type: SET_PROFILE_PHOTO, photo });
  export const logoutUser = () => ({ type: LOGOUT_USER });
  export const submitLoginData = (payload) => ({ type: LOGOUT_USER, payload });

  export const getAuthDataTC = () => {
    return (dispatch) => {
      getAuthAPI.getAuth().then((data) => {
        let { id, email, login, isAuth } = data.data;
        if (data.resultCode === 0) {
          dispatch(getAuthDataAC(id, email, login, (isAuth = true)));
        }
        dispatch(setFetchingAuthData(true));
      });
    };
  };

  export const logoutUserTC = () => {
    return (dispatch) => {
      getAuthAPI.logout().then((data) => {
        dispatch(logoutUser());
      });
    };
  };
  export const submitLoginDataTC = (loginData) => {
    return (dispatch) => {
      getAuthAPI.sendLoginData(loginData).then((data) => {
        if (data.resultCode === 0) {
          dispatch(getAuthDataTC());
        }
      });
    };
  };
  export const getProfilePhotoTC = (id) => {
    return (dispatch) => {
      getAuthAPI.getProfilePhoto(id).then((photo) => {
        dispatch(setProfilePhoto(photo));
      });
    };
  };