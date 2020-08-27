import React from 'react';
import AppLayout from '../components/AppLayout';
import {Button, FormControl, FormGroup, Form, Container, Row,Col} from 'react-bootstrap';
import BoardsPage from '../components/BoardsPage';
import Comments from '../components/Comments';

const FreeBoardContent = () => {
    return(
        <AppLayout>
            <Container style={{ width: "80%", margin: "auto" }}>
                <Form.Row style={{marginTop:"60px"}}>
                    <Form.Label>
                        <h2>글제목</h2>
                    </Form.Label>
                </Form.Row> 
                <Form.Row>
                    <Form.Label>
                        <div><b>글쓴이</b>  &nbsp;  2020/01/01  &nbsp; 조회수: <b>2</b> &nbsp; 추천수: <b>2</b></div>
                    </Form.Label>
                </Form.Row>
                <hr/>
                <Form.Row style={{marginTop:"10%", marginBottom:"10%"}}>
                    글내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<pre/>
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </Form.Row>
                <Form.Row>
                <Button variant="outline-info" style={{marginLeft:"45%"}}>👍2</Button>{' '}
                <Button variant="outline-info" style={{marginLeft:"10px"}}>👎2</Button>{' '}
                </Form.Row>
                <Form.Row style={{marginTop:"10%"}}>
                    <Comments />
                </Form.Row>

                <Form.Row style={{marginTop:"10%"}}>
                    <BoardsPage/>
                </Form.Row>
            </Container>
        </AppLayout>
    );
}

export default FreeBoardContent;