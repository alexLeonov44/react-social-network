import React from 'react'
import { updateProfileStatusTC } from '../../Redux/actions/profile';

import classes from './Profile.module.scss';

export default function ProfileStatus({setProfileVisibleStatus,dispatch}) {
    const [statusValue, setStatusValue] = React.useState('')
    const statusOnChange=(e)=>{
        setStatusValue(e.target.value)
    }
    const submitStatusValue =()=>{
       dispatch(updateProfileStatusTC(statusValue))
        setProfileVisibleStatus(false)

    }
    return (
        <div className={classes.profile__wide__block__info__status} >
            <input onChange={e=>statusOnChange(e)} type="text" value={statusValue} placeholder="Add status"/>
            <button onClick={()=>submitStatusValue()}>Сохранить</button>
        </div>
    )
}
