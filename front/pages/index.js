import React, {useState} from 'react';
import { Card, Tabs, Tab, Button, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import Carousel from 'react-bootstrap/Carousel'
import AppLayout from '../components/AppLayout'
import Toast from 'react-bootstrap/Toast'


const Home = () => {
    return(
        <>

            <AppLayout>
                <br/>
                <Accordion defaultActiveKey="0">

                <Carousel style={{ width: '900px', marginTop: "10px", margin: "auto", marginBottom: "40px"}}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>오름이</h3>
                    <p>오름1동에 살고 있는 고양이 오름이</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/2.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>금오공과대학교 운동장</h3>
                    <p>By 연서</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>모카</h3>
                    <p>자고 있는 모카</p>
                    </Carousel.Caption>
                </Carousel.Item>
				<Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="/4.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>금오공대 하늘</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
                        <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                        자유게시판
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        최근글:
                            <Toast>
                                <Toast.Header>
                                    <strong className="mr-auto">유저1</strong>
                                    <small>시간</small>
                                </Toast.Header>
                                <Toast.Body>글내용</Toast.Body>
                            </Toast>
                            <br></br>
                            인기글:
                            <Toast>
                                <Toast.Header>
                                    <strong className="mr-auto">유저2</strong>
                                    <small>시간</small>
                                </Toast.Header>
                                <Toast.Body>글내용</Toast.Body>
                            </Toast>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                        강의후기
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            최근후기:
                            <Toast>
                                <Toast.Header>
                                    <strong className="mr-auto">유저1</strong>
                                    <small>시간</small>
                                </Toast.Header>
                                <Toast.Body>후기내용</Toast.Body>
                            </Toast>
                            <br></br>
                            인기후기:
                            <Toast>
                                <Toast.Header>
                                    <strong className="mr-auto">유저2</strong>
                                    <small>시간</small>
                                </Toast.Header>
                                <Toast.Body>후기내용</Toast.Body>
                            </Toast>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>   
            </AppLayout>
        </>
    );
}

export default Home;