import React from 'react';
import AppLayout from '../components/AppLayout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const write = () => {
    return(
        <>
            <AppLayout>
                <br/><br/>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>제목</Form.Label>
                        <Form.Control type="title" placeholder="제목을 입력하세요" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>내용</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="내용을 입력하세요"/>
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" />
                    </Form.Group>
                </Form><br/>
                <Button as="input" type="submit" value="완료" />{' '}
            </AppLayout>
        </>
    );
}

export default write;