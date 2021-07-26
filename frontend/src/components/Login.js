import React,{useState,useEffect} from 'react';
import {Form , Button } from "react-bootstrap";
import * as yup from 'yup';
import Input from "./Input";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';



const Login = (props) => {
    let history =useHistory();

    const defaultState={
        username:"",
        password:""
    };

    const [Error,setError]=useState({...defaultState});
    const [loginState,setLoginState]=useState(defaultState);
    const [buttonDisabled,setButtonDisabled]=useState(true);
    
    const formschema=yup.object().shape({
        username:yup.string().required("username is required"),
        password:yup.string().required("Password is required")
    })

    useEffect(()=>{
        if (loginState.username && loginState.password){
            setButtonDisabled(true)
        }
        else if(
            loginState.username|| loginState.password){
                setButtonDisabled(false)
            }

    },[loginState])

    const loginSubmit=(e)=>{
        e.preventDefault();

        axiosWithAuth().post('https://anywherefitbe.herokuapp.com/api/auth/login',loginState,{withCredentials:true})

        .then(res=>{
            console.log("LoginState",res)
            localStorage.setItem('token',"secret");
            props.setLoggedIn(true);
            history.push("/Instructor")
        })
        .catch(err=>{
            console.log("Error message",err)

        })
    }
    const inputchange=(e)=>{
        e.persist();
        const value=e.target.value;
        yup.reach(formschema,e.target.name)
        .validate(value)
        .then(valid=>{
            setError({...Error,[e.target.name]:""})
        })
        setLoginState({
            ...loginState,
            [e.target.name]:e.target.value
        })
    }
    
    return (
        <>
            <Form onSubmit={loginSubmit}>
                 <Input  type="text" placeholder="User Name" onChange={inputchange} value={loginState.username} name="username" label="User Name" errors={Error}/>
                 <Input  type="password" placeholder="Password" onChange={inputchange} value={loginState.password} name="password" label="Password" errors={Error}/>
               
                <Button  type="submit" disabled={buttonDisabled} >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login;