import React from 'react';

import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import EditProfile from './components/editProfile/EditProfile';

import { Redirect, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AppLoader from './assets/AppLoader';
import { getAuthDataTC } from './Redux/actions/auth';


function App() {
  console.log('app')
  const isAuth = useSelector(({ auth }) => auth.isAuth);
  const isFetchingAuth = useSelector(({ auth }) => auth.isFetchingAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAuthDataTC());
  }, []);

  if (!isFetchingAuth) {
    return <AppLoader />;
  }
  return (
    <div className="container">
      <HeaderContainer className="header" />
      <div className="container_contant">
        <Route exact path="/">
          <Redirect to="/profile" />
        </Route>
        <Navbar
          className="nav"
          items={['profile', 'dialog', 'users', 'news', 'weather', 'setting']}
        />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => isAuth ? <ProfileContainer /> :  <Login />} />
        <Route path="/editProfile" render={() => <EditProfile/>} />
      </div>
    </div>
  );
}




export default App;
