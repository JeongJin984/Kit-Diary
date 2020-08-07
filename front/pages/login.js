import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

const StyledCard = styled(Card)`
    margin: auto;
`;

const login = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledCard className="stylecard" style={{ width: '30rem', marginTop: '20px' }}>
                <StyledCard.Img variant="top" src="/cat.png" />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="이메일을 입력하세요"
                            className="login-email"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            className="login-password"
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Button className="login-btn" variant="primary" type="submit">
                            Submit
                        </Button>
                        <Link href="signup">
                            <Button className="login-btn" variant="primary">
                                회원가입
                            </Button>
                        </Link>{' '}
                        <Button className="login-btn">비밀번호 찾기</Button>
                    </Form.Group>
                </Form>
            </StyledCard>
        </div>
    );
};

export default login;
