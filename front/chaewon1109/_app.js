import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const StyledButton = styled(Button)`
    width:114px;
    height:40px;

`

const App = ({ Component }) => {
    return(
        <div>
            <Head>
                <title>my test</title>
                <meta charSet = "utf-8"></meta>
            </Head>
            <Link href="./"><div 
                style={{
                    backgroundImage: `url("https://postfiles.pstatic.net/MjAyMDA4MDRfOTkg/MDAxNTk2NTMzNjMyNDk5.bVxI9tSqy2sLCuYYURHmui_1KYvVyWwetLDC9hfDza0g.m5Cz24Bohr7ljnnvsm4DbjhVilVXB0zwtJMm1ZiQ_TAg.JPEG.ttkk1109/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94._1_(1).jpg?type=w773")`,backgroundRepeat: 'no-repeat', height:'90px', width:'100%',resizeMode:'cover', color:'white'
                }}>
            </div></Link>
            <Container fluid>
                <Row>
                    <StyledButton variant="outline-info">인기글</StyledButton>{' '}
                    <StyledButton variant="outline-info">자유게시판</StyledButton>{' '}
                    <StyledButton variant="outline-info">강의후기</StyledButton>{' '}
                    <StyledButton variant="outline-info">내 시간표</StyledButton>{' '}
                    <Form.Group>
                    <Form.Control  type="text" placeholder="검색어를 입력하세요" />
                    </Form.Group>
                    <Link href="/profile"><a><StyledButton variant="outline-info">로그인</StyledButton>{' '}</a></Link>
                </Row>
            </Container>
            <Component />
        </div>
    );
}

export default App;