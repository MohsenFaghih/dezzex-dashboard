import React, { useContext, useState } from 'react';
import { Navigate } from "react-router-dom";
import { LoginForm, ErrorBlock } from './styles/Login'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../contexts/DataContext';

const Login = () => {

    const context = useContext(DataContext)

// Get login form data from context
    const {inputs, buttonText, errorMsg} = context.loginFormData
// check if user logged in or not
    const isUserLoggedIn = context.userSetCookies
// error block to show 
    const [error, setError] = useState('none')
// check if user info is correct, set user cookies
    const checkUser = context.checkUser
    const loginUser = (e) =>{
        e.preventDefault()
        setError('none')
        const setUserCookies = checkUser({name: 'loginData', user: e.target.username.value, password: e.target.password.value})
        if(!setUserCookies) setError('block')
    }
    
    return (
        <>
        {/* If user data doesn't exist, show login form  */}
        {!Object.keys(isUserLoggedIn).length ? 
            <LoginForm>
                <Form onSubmit={loginUser} style={{backgroundColor: 'white'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{inputs.username}</Form.Label>
                        <Form.Control name='username' type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>{inputs.password}</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <ErrorBlock display={error}>
                        {errorMsg}
                    </ErrorBlock>
                    <Button variant="primary" type="submit">
                        {buttonText}
                    </Button>
                </Form>
            </LoginForm>
        :
            // If user data exists, send to dashboard page
            <Navigate to='/dashboard' />
        }
        </>
    )
}

export default Login