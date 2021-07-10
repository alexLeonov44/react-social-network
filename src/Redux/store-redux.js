import { createStore , combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import authReduser from './auth-reduser';
import dialogaReduser from './dialogs-reduser';
import profileReduser from './profile-reduser';
import usersReduser from './users-reduser'

let rootReducer = combineReducers({profilePage:profileReduser,dialogsPage:dialogaReduser,usersPage:usersReduser,auth:authReduser})

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

store.subscribe(()=> console.log('change'))
window.store = store

export default store
