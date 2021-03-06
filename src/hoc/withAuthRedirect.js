import React from 'react'
import { Redirect } from 'react-router-dom'

export default function withAuthRedirect(Component) {
   
    let RedirectComponent = (props)=> {
        if(!props.isAuth) return <Redirect to ='/login'/>
        
        return <Component {...props}/>
    }
    return RedirectComponent
}
