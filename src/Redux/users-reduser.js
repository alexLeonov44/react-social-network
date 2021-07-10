import { FOLLOW_USER, GET_USERS, SET_CURRENT_PAGE, SET_FETCHING_USERS_DATA, SET_FOLLOWING_IN_PROGRESS_ID, UNFOLLOW_USER } from "./types";

let initialState = {
  items: [],
  totalCount: null,
  pagesPortion:70,
  currentUsersPage:1,
  isFetching:false,
  error: null,
  followingInProgress:[]
};

export default function usersReduser(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
    return {...state,items:[...action.payload.items],totalCount:action.payload.totalCount}
    case SET_CURRENT_PAGE:
    return {...state,currentUsersPage:action.currentPage}
    case SET_FETCHING_USERS_DATA:
    return {...state,isFetching:action.isFetching}
    case SET_FOLLOWING_IN_PROGRESS_ID:
    return {...state,followingInProgress:[...state.followingInProgress,action.userId]
      .filter((id,index,self)=> self.indexOf(id) === self.lastIndexOf(id))}
    case FOLLOW_USER:
    return {...state,items:state.items.map(user=>{
      if(user.id === action.userId){
        return {...user,followed:true}
      }
      return user
    })}
    case UNFOLLOW_USER:
    return {...state,items:state.items.map(user=>{
      if(user.id === action.userId){
        return {...user,followed:false}
      }
      return user
    })}
  }
  return state;
}


