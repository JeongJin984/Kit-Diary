import React from 'react';
import AppLayout from '../components/AppLayout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import { FormControl, Container } from 'react-bootstrap'

const write = () => {
    return (
        <>
            <AppLayout>
                <br /><br />
                <Container style={{ width: "80%", margin: "auto" }}>
                    <Form >
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">제목</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl />
                        </InputGroup>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="내용을 입력하세요" style={{height:"300px"}} />
                        </Form.Group>
                    </Form>
                    <Form>
                    </Form><br />
                    <Button as="input" type="submit" value="완료" />{' '}
                </Container>
            </AppLayout>
        </>
    );
}

export default write;