import { GET_PROFILE_DATA, SET_FETCHING_PROFILE_DATA, SET_PROFILE_STATUS } from './types';

let initialState = {
  profileData: {},
  postData: [
    { id: 1, post: 'hi first post,lorem ipsum male cormos pisk ytremale', like: 6, viev: 5 },
    {
      id: 2,
      post: ' lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
      like: 3,
      viev: 15,
    },
  ], 
  isFetching: false,
  newPostText: '',
  status:''
};

export default function profileReduser(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_DATA:
      return { ...state, profileData: { ...action.profileData } };
    case SET_FETCHING_PROFILE_DATA:
      return { ...state, isFetching: action.isFetching };
    case SET_PROFILE_STATUS:
      return { ...state, status: action.status };
    case 'POST-SUBMIT':
      let newPostData = {
        id: state.postData.id++,
        post: state.newPostText,
        like: Math.floor(Math.random() * 25),
        viev: Math.ceil(Math.random() * 25),
      };
      return { ...state, postData: [...state.postData, newPostData], newPostText: '' };
    case 'ON-CHANGE-POST-TEXT':
      return { ...state, newPostText: action.payload };
  }

  return state;
}

export const onChangePostTextAC = (value) => ({ type: 'ON-CHANGE-POST-TEXT', payload: value }); // --------->  recieve action obeject yo ui
export const postSubmitAC = () => ({ type: 'POST-SUBMIT' }); // --------->  recieve action obeject yo ui
