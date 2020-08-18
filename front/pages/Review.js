import React from 'react';
import AppLayout from '../components/AppLayout';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button, FormControl, Form, InputGroup } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard';
import Link from 'next/link'z

const Review = () => {
    return (
        <>
            <AppLayout>
                <br></br>
                <Container style={{ marginLeft: "60px" }}>
                    <Button variant="outline-info" style={{ margin: "10px", marginLeft: "20px" }}>전공</Button>{' '}
                    <Button variant="outline-info" style={{ margin: "10px" }}>MSC</Button>{' '}
                    <Button variant="outline-info" style={{ margin: "10px" }}>교양</Button>{' '}
                    <div style={{ float: 'right', marginRight: "13%" }}>
                    <FormControl class="inline"  type="text" placeholder="Search"  />
                    <Button variant="outline-info" style={{ width: "60px", height: "40px"}}>검색</Button>
                    <Link href="/ReviewWrite"><a><Button variant="outline-info" style={{margin:"10px"}}>후기쓰기</Button>{' '} </a></Link>
                    </div>
                </Container>
                <ReviewCard />
            </AppLayout>
        </>
    );
}

export default Review;