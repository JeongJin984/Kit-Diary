import React from 'react';
import AppLayout from '../components/AppLayout';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Button } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard';
import Link from 'next/link'

const Review = () => {
    return (
        <>
            <AppLayout>
                <br></br>
                <Container style={{ marginLeft: "60px" }}>
                    <Button variant="outline-info" style={{ margin: "10px", marginLeft: "20px" }}>전공</Button>{' '}
                    <Button variant="outline-info" style={{ margin: "10px" }}>MSC</Button>{' '}
                    <Button variant="outline-info" style={{ margin: "10px" }}>교양</Button>{' '}
                    <Link href="/ReviewWrite"><a><Button variant="outline-info" style={{float:'right', marginRight: "14%"}}>후기쓰기</Button>{' '} </a></Link>
                </Container>
                <ReviewCard/>
        </AppLayout>
        </>
    );
}

export default Review;