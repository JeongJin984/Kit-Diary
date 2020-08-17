import React from 'react';
import AppLayout from '../components/AppLayout';
import { Button, FormControl, FormGroup, Form, Container, Row, Col } from 'react-bootstrap'
import ReviewCard from '../components/ReviewCard';
import Comments from '../components/Comments'

const ReviewContent = () => {
    return (
        <AppLayout>
            <Container style={{ width: "80%", margin: "auto" }}>
                <Form.Row style={{ marginTop: "60px" }}>
                    <Form.Label>
                        <h2>후기제목</h2>
                    </Form.Label>
                </Form.Row>
                <Form.Row>
                    <Form.Label>
                        <div><b>글쓴이</b>  &nbsp;  2020/01/01  &nbsp; 조회수: <b>2</b> &nbsp; 추천수: <b>2</b></div>
                    </Form.Label>
                </Form.Row>
                <Form.Row style={{ marginTop: "10%" }}>
                    <b>과목명: &nbsp;&nbsp; </b> 이산수학
                </Form.Row>
                <Form.Row style={{ marginTop: "12px" }}>
                    <b>교수님: &nbsp;&nbsp; </b> 오길호
                </Form.Row>
                <Form.Row style={{ marginTop: "12px" }}>
                    <b>평점: &nbsp;&nbsp;  </b> ★★★★★
                </Form.Row>
                <Form.Row style={{ marginTop: "10%", marginBottom: "10%" }}>
                    후기내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<pre />
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </Form.Row>
                <Form.Row>
                    <Button variant="outline-info" style={{ marginLeft: "45%" }}>👍2</Button>{' '}
                    <Button variant="outline-info" style={{ marginLeft: "10px" }}>👎2</Button>{' '}
                </Form.Row>

                <Form.Row style={{ marginTop: "10%" }}>
                    댓글목록생길예정
                </Form.Row>
            </Container>
        </AppLayout>
    );
}

export default ReviewContent;