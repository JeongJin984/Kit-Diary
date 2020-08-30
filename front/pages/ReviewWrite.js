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
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                                <option>전공</option>
                                <option>MSC</option>
                                <option>교양</option>
                            </Form.Control>
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">과목명</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">교수님</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">시간</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">별점</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Check style={{margin:"10px"}}
                                type="radio"
                                label="1점"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check style={{margin:"10px"}}
                                type="radio"
                                label="2점"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check style={{margin:"10px"}}
                                type="radio"
                                label="3점"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check style={{margin:"10px"}}
                                type="radio"
                                label="4점"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check style={{margin:"10px"}}
                                type="radio"
                                label="5점"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                        </InputGroup>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows="3" placeholder="내용을 입력하세요" />
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