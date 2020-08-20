import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

import wrapper from '../store/configure-store';
import { useSelector } from 'react-redux';

const App = ({ Component }) => {

  return(
    <div>
      <Head>
        <title>kit-diary</title>
        <meta charSet="utf-8"></meta>
      </Head>
      <Component />
    </div>
  );
};


export default wrapper.withRedux(App)
