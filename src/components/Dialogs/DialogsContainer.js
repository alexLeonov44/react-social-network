import React from 'react';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

 function DialogsContainer({dialogsData,messagesData}) {
  return (
    <div>
      <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsPage.dialogsData,
    messagesData: state.dialogsPage.messagesData,
    isAuth:state.auth.isAuth
  };
};
let authRedirectComponent = withAuthRedirect(DialogsContainer)
export default connect(mapStateToProps, null)(authRedirectComponent);
