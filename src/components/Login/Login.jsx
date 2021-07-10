import React from 'react'
import { useDispatch } from 'react-redux';
import { submitLoginDataTC } from '../../Redux/actions/auth';

import classes from './Login.module.scss';

export default function Login() {

    const [inputValue, setInputValue] = React.useState({
        email:"",
        password:"",
        rememberMe:false
    })
    const dispatch = useDispatch()

    const inputOnChange=(e)=>{
        let {name , value ,type , checked} = e.target
        if(type ===  'checkbox' ){
             value = checked
        }
        setInputValue({...inputValue,[name]:value})
    }
    const submitForm=(e)=>{
        e.preventDefault()
       dispatch(submitLoginDataTC(inputValue))
    }
    return (
        <div className={classes.login}>
            <p>Sign in</p>
            <div className={classes.login__form}>
                <form onSubmit={submitForm}>
                <input type="text" className={classes.login__form_inputText} name="email" placeholder="email" onChange={inputOnChange} value={inputValue.Login}/>
                <input type="text" className={classes.login__form_inputText} name="password" placeholder="password" onChange={inputOnChange} value={inputValue.Password}/>
                <input type="checkbox" name="rememberMe" onChange={inputOnChange} checked={inputValue.RememberMe}/>
                <span>Remember me</span>
                <button className={classes.login__submit}>sign in</button>
                </form>
            </div>
            
        </div>
    )
}
