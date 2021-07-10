import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {  getUsersTC } from '../../Redux/actions/users';


class usersContainer extends React.Component {
 
  componentDidMount(){
    this.props.dispatch(getUsersTC(this.props.currentUsersPage,this.props.pagesPortion))
  }

  render() {
    return <Users userItems={this.props.userItems} dispatch={this.props.dispatch} totalCount={this.props.totalCount} 
     pagesPortion={this.props.pagesPortion} currentUsersPage={this.props.currentUsersPage} isFetching={this.props.isFetching}
     followingInProgress={this.props.followingInProgress}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    userItems: state.usersPage.items,
    totalCount:state.usersPage.totalCount,
    pagesPortion:state.usersPage.pagesPortion,
    currentUsersPage:state.usersPage.currentUsersPage,
    isFetching:state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch }
};

export default connect(mapStateToProps, mapDispatchToProps)(usersContainer);
  