import React, { useState, useCallback, useEffect, } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux'
import {logInAction} from '../reducers/user'
import Router from "next/router";

const StyledCard = styled(Card)`
    margin: auto;
`;

const login = () => {
    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch();

	const onChangeEmail = useCallback(
		(e) => {
            setEmail(e.target.value)
		},
		[],
	) 

	const onChangePassword = useCallback(
		(e) => {
			setPassword(e.target.value)
		},
		[],
    )

	const onSubmitLogInForm = useCallback(
		(e) => {
            e.preventDefault()
            dispatch(logInAction({email, password}))
            Router.push("/")
        },
		[email, password],
    )

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledCard className="stylecard" style={{ width: '30rem', marginTop: '20px' }}>
                <Link href="/">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        size="2x"
                        style={{ marginLeft: '20px', marginTop: '20px', cursor: 'pointer' }}
                    />
                </Link>

                <StyledCard.Img variant="top" src="/cat.png" />
                <Form onSubmit={onSubmitLogInForm}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="이메일을 입력하세요"
                            className="login-email"
                            value={email} onChange={onChangeEmail}
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
                            value={password} onChange={onChangePassword}
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
