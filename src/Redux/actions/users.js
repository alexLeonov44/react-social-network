import { usersDataAPI } from "../../api/api";
import { FOLLOW_USER, GET_USERS, SET_CURRENT_PAGE, SET_FETCHING_USERS_DATA, SET_FOLLOWING_IN_PROGRESS_ID, UNFOLLOW_USER } from "../types";

  //users
  export const getUsersAC = (items) => ({ type: GET_USERS, payload: items });
  export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE,currentPage });
  export const setFetchingUsersgData = (isFetching) => ({
    type: SET_FETCHING_USERS_DATA,
    isFetching,
  });
  export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
  export const unFollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
  export const setFollowingInProgressId = (userId) => ({
    type: SET_FOLLOWING_IN_PROGRESS_ID,
    userId,
  });
  
  export const getUsersTC = (currentUsersPage,pagesPortion) => {
    return (dispatch) => {
        dispatch(setFetchingUsersgData(true))
        usersDataAPI.getUsersData( currentUsersPage,pagesPortion)
        .then( data => {
          dispatch(getUsersAC(data))
          dispatch(setFetchingUsersgData(false))
        } )
        .catch( error =>  console.log(error));
    };
  };
  export const setUsersPageTC = (page) => {
    return (dispatch) => {
       dispatch(setCurrentPage(page))
    };
  };
  export const userFollowTC = (userId) => {
    return (dispatch) => {
      dispatch(setFollowingInProgressId(userId));
      usersDataAPI.userFollow(userId).then(() => {
        dispatch(followUser(userId));
        dispatch(setFollowingInProgressId(userId));
      });
    };
  };
  export const userUnfollowTC = (userId) => {
    return (dispatch) => {
      dispatch(setFollowingInProgressId(userId));
      usersDataAPI.userUnfollow(userId).then(() => {
        dispatch(unFollowUser(userId));
        dispatch(setFollowingInProgressId(userId));
      });
    };
  };
  