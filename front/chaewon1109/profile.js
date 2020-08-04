import React from 'react';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

const profile = () => {
    return(
        <div>
            <br/>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="이메일을 입력하세요" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    완료
                </Button>
            </Form>
            <br/>
            <ButtonToolbar aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2" aria-label="First group">
                    <Link href="signup"><a><Button>회원가입</Button></a></Link> <Button>비밀번호 찾기</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </div>
    );
}

export default profile;