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
                <hr />
                <Form.Row style={{ marginTop: "10%" }}>
                <table>
                    <tbody>
                    <tr>
                            <td style={{ textAlign: "right" }}>
                                <b>과목분류 </b>
                            </td>
                            <td style={{ paddingLeft: "50px" }}>
                                msc
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "15px" }}>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <b>과목명 </b>
                            </td>
                            <td style={{ paddingLeft: "50px" }}>
                                이산수학
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "15px" }}>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <b>교수님 </b>
                            </td>
                            <td style={{ paddingLeft: "50px" }}>
                                오길호
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingTop: "15px" }}>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ }}>
                                <b>평점</b>
                            </td>
                            <td style={{ paddingLeft: "50px" }}>
                                ★★★★★
                        </td>
                        </tr>
                    </tbody>
                </table>
                </Form.Row>
                <Form.Row style={{ marginTop: "10%", marginBottom: "10%" }}>
                    후기내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~<pre />
                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                </Form.Row>

                <Form.Row style={{ marginBottom: "35px" }}>
                    <Button variant="outline-info" style={{ marginLeft: "45%" }}>👍2</Button>{' '}
                    <Button variant="outline-info" style={{ marginLeft: "10px" }}>👎2</Button>{' '}
                </Form.Row>

                <Form.Row style={{ marginTop: "10%" }}>
                    <Comments/>
                </Form.Row>
            </Container>
            <Form.Row style={{ marginTop: "10%" }}>
                <ReviewCard />
            </Form.Row>
        </AppLayout>
    );
}

export default ReviewContent;