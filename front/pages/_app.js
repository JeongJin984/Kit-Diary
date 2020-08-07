import React, {useState} from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';


import wrapper from '../store/configure-store'
import withReduxSaga from 'next-redux-saga'
import { useSelector } from 'react-redux'



const App = ({ Component }) => {
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
        </div>
    );
}

export default wrapper.withRedux(withReduxSaga(App))

//export default App