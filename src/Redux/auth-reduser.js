import { GET_AUTH_DATA, LOGOUT_USER, SET_FETCHING_AUTH, SET_PROFILE_PHOTO } from "./types";

let   initialState = {
    id: null,
    email:null,
    login:null,
    isAuth: false,
    isFetchingAuth:false,
    profilePhoto:null
}
    
    export default function authReduser(state = initialState, action) {
      switch (action.type) {
        case GET_AUTH_DATA:
      return { ...state,
        ...action.authData,
       };
        case SET_FETCHING_AUTH:
      return { ...state,isFetchingAuth:action.isFetching };
        case LOGOUT_USER:
      return { ...state,isAuth: false };
        case SET_PROFILE_PHOTO:
      return { ...state,profilePhoto:action.photo };
      }
      return state
    }
    