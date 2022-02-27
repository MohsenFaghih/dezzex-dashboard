import React, { useContext, useState } from 'react';
import { Navigate } from "react-router-dom";
import { LoginForm, ErrorBlock } from './styles/Login'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from '../contexts/DataContext';

const Login = () => {

// check if user logged in ?
    const isUserLoggedIn = useContext(DataContext).userSetCookies
// error block to show 
    const [error, setError] = useState('none')
// check if user info is correct, set user cookies
    const checkUser = useContext(DataContext).checkUser
    const loginUser = (e) =>{
        e.preventDefault()
        setError('none')
        const setUserCookies = checkUser({name: 'loginData', user: e.target.username.value, password: e.target.password.value})
        if(!setUserCookies) setError('block')
    }
    
    return (
        <>
        {!Object.keys(isUserLoggedIn).length ? 
            <LoginForm>
                <Form onSubmit={loginUser} style={{backgroundColor: 'white'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username (admin)</Form.Label>
                        <Form.Control name='username' type="text" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password (admin)</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <ErrorBlock display={error}>
                        username or password is not correct, please try again.
                    </ErrorBlock>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </LoginForm>
        :
            <Navigate to='/dashboard' />
        }
        </>
    )
}

export default Login