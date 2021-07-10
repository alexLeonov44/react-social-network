import React from 'react'
import { getUsersTC, setUsersPageTC } from '../../Redux/actions/users';
import c from './Users.module.scss';

export default function UsersPaging({pagesPortion, totalCount, currentUsersPage,dispatch,isFetching}) {

    const [leftBorderPortion, setIeftBorderPortion] = React.useState(0)

    let countItemsPaginator = 5
    let pagesCount =Math.ceil(totalCount / pagesPortion)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
   const setUsersPage=(page)=>{
    dispatch(setUsersPageTC(page))
    dispatch(getUsersTC(page,pagesPortion))
    } 
    
    const selectFirstPage=()=>{
        setUsersPage(1)
        setIeftBorderPortion(0)
    }
    const selectLastPage=()=>{
        setUsersPage(pages.length )
        setIeftBorderPortion(pages.length - countItemsPaginator)
    }
    return (
        <div className={ c.users_paging}>
            <span className={leftBorderPortion === 0 ? c.users_paging_disabled : c.users_paging_span}  onClick={()=> setIeftBorderPortion(leftBorderPortion - countItemsPaginator)}>prev</span>
              {leftBorderPortion !== 0 &&  <span className={c.users_paging_span} onClick={()=> selectFirstPage()}>1...</span>} 
           {
               pages.filter(item=> item > leftBorderPortion && item <= leftBorderPortion + countItemsPaginator).map(page=>(
                   <span key={page} className={ page === currentUsersPage ? c.users_paging_current : c.users_paging_span } 
                   onClick={()=> setUsersPage(page)}>{page}</span>
               ))
           } 
             { leftBorderPortion !== pages.length - countItemsPaginator  &&  <span className={c.users_paging_span} onClick={()=> selectLastPage()}>...{pages.length -1}</span>} 
           <span className={leftBorderPortion === pages.length - countItemsPaginator ? c.users_paging_disabled :c.users_paging_span} onClick={()=> setIeftBorderPortion(leftBorderPortion + countItemsPaginator)}>next</span>
        </div>
    )
}
