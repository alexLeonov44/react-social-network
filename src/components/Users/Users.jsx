import React from 'react'
import classes from './Users.module.scss';
import UsersItem from './UsersItem';
import UsersPaging from './UsersPaging';
import UsersLoader from '../../assets/UsersLoader';

import PaginationMatUI from './PaginationMatUI'

export default function Users({userItems, totalCount,pagesPortion,currentUsersPage,isFetching,dispatch,getUsers,followingInProgress}) {
 
    return (
        <div className={classes.users}>
            <div className={classes.users__info} >
            все друзья : {totalCount}
            <UsersPaging pagesPortion={pagesPortion} totalCount={totalCount} currentUsersPage={currentUsersPage} dispatch={dispatch} 
            getUsers={getUsers} isFetching={isFetching} />
            {/* <PaginationMatUI pagesPortion={pagesPortion} totalCount={totalCount} currentUsersPage={currentUsersPage} dispatch={dispatch}
            getUsers={getUsers}/> */}
            </div>
            {
              isFetching ?
              Array(10).fill(<UsersLoader/>)
              :
                userItems.map(item=>(
                    <UsersItem item={item} key={item.id} dispatch={dispatch} followingInProgress={followingInProgress} />
                ))
            }
            
        </div>
    )
}
