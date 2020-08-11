import React, {useState} from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import './css/login.css';
import './css/signup.css';


import wrapper from '../store/configure-store'
import withReduxSaga from 'next-redux-saga'
import { useSelector } from 'react-redux'



const App = ({ Component }) => {
<<<<<<< HEAD
    return (
        <div>
            <Head>
                <title>kit-diary</title>
                <meta charSet="utf-8"></meta>
            </Head>
            <Component />
=======
    const [current, setCurrent] = useState('');
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    console.log('app.js   '+ isLoggedIn)
    
    return(
        <div>
            <div>
                <Head>
                    <title>kit-diary</title>
                    <meta charSet = "utf-8"></meta>
                </Head>
                <Component />
            </div>
>>>>>>> 0697de92546ac5a8bd4f5ab5284aa32aea7bfe90
        </div>
    );
};

<<<<<<< HEAD
export default App;
=======
export default wrapper.withRedux(withReduxSaga(App))

//export default App
>>>>>>> 0697de92546ac5a8bd4f5ab5284aa32aea7bfe90
