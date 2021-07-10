import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {'API-KEY':'04db4cf5-d605-4eca-b6f0-273f3f99895d'}
  });
export const getAuthAPI = {
     getAuth(){
    return instance('auth/me')
     .then(({data})=> data)
   },
   logout(){
    return instance.delete(`auth/login`)
     .then(({data})=> data)
   },
   sendLoginData(payload){
    return instance.post(`auth/login`,payload)
     .then(({data})=> data)
   },
     getProfilePhoto(userId){
    return instance(`profile/${userId}`)
     .then(({data})=> data.photos.small)
   }
}
export const ProfileDataAPI = {
    getProfileData(userId){
    return instance(`profile/${userId}`)
     .then(({data})=> data)
   },
    setProfileInfo(newProfileData){
    return instance.put(`profile`,newProfileData)
     .then(({data})=> data)
   },
    updateProfileStatus(statusValue){
    return instance.put(`profile/status/`,{status:statusValue})
     .then(({data})=> data)
   },
    getProfileStatus(userId){
    return instance(`profile/status/${userId}`)
     .then(({data})=>data)
   },
    changeProfilePhoto(photoFile){
      const formData = new FormData()
    formData.append('image',photoFile)
    return instance.put(`profile/photo/`,formData,{
        headers: {
            'Content-Type': `multipart/form-data;`,
          }}).then(({data})=>data)
   }
}
export const usersDataAPI = {
    getUsersData(currentUsersPage,pagesPortion){
    return instance(`users?page=${currentUsersPage}&count=${pagesPortion}`)
     .then(({data})=> data)
   },
    userFollow(userId){
    return instance.post(`follow/${userId}`,{})
     .then(({data})=> data)
   },
    userUnfollow(userId){
    return instance.delete(`follow/${userId}`)
     .then(({data})=> data)
   }
   
}
