import React, {useState, useCallback} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {useDispatch} from 'react-redux'
import Router from "next/router";
import { SignupAction } from '../reducers/user'
const StyledCard = styled(Card)`
		margin: auto;
`;

const signup = () => {
	const [nickname, setNick] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [stdnum, setStdnumber] = useState('')
	const [radioGroup, setRadio] = useState({
		Business:false,
		Electronics:false,
		Computer:false,
	})
	const [major,setMajor] = useState('')

	const dispatch = useDispatch();
		
	const onChangeNick = useCallback(
		(e) => {
			setNick(e.target.value)
		},
		[],
	) 

	const onChangeEmail = useCallback(
		(e) => {
			setEmail(e.target.value)
		},
		[],
	) 

	const onChangePassword = useCallback(
		(e) => {
			setPassword(e.target.value)
			//console.log('password '+ password)
		},
		[],
	)

	const onChangeStdnumber = useCallback(
		(e) => {
			setStdnumber(e.target.value)
			//console.log('stdnumber '+ stdnumber)
		},
		[],
	)
	const handleRadio = useCallback((e) => {
	 setMajor(e.target.value)
  },[]);



	const onSubmitSignupForm = useCallback(
		(e) => {
						e.preventDefault()
						dispatch(SignupAction({email, password,stdnum,major,nickname}))
        },
		[email, password, stdnum, nickname, major],
		)
		

	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
				<StyledCard className="stylecard" style={{ width: '30rem', marginTop: '20px' }}>
						<Link href="login">
								<a>
								<FontAwesomeIcon
										icon={faChevronLeft}
										size="2x"
										style={{ marginLeft: '20px', marginTop: '20px', cursor: 'pointer' }}
								/>
								</a>
						</Link>
						<StyledCard.Img variant="top" src="/cat.png" style={{ borderRadius: '25px' }} />
						<Form onSubmit={ onSubmitSignupForm }>
								<Form.Row>
										<Form.Group as={Col} controlId="formGridEmail">
												<Form.Label>Email</Form.Label>
												<Form.Control 
														type="email"
														placeholder="Enter email"
														className="signup-email"
														value={email} onChange={onChangeEmail}
												/>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridPassword">
												<Form.Label>Password</Form.Label>
												<Form.Control
														type="password"
														placeholder="Password"
														className="signup-password"
														value={password} onChange={onChangePassword}
												/>
										</Form.Group>
								</Form.Row>
								<Form.Group controlId="formGridEmail">
										<Form.Label>Nick name</Form.Label>
										<Form.Control
												type="text"
												placeholder="Nick name"
												className="signup-nickname"
												value={nickname} onChange={onChangeNick}
										/>
								</Form.Group>	
								<Form.Group controlId="formGridEmail">
										<Form.Label>Student Number</Form.Label>
										<Form.Control
												type="number"
												placeholder="Student Number"
												className="signup-stdnum"
												value={stdnum} onChange={onChangeStdnumber}
										/>
								</Form.Group>									
								<br />
										<fieldset>
												<Form.Group as={Row}>
														<Form.Label as="legend" column sm={2}>
																학과
														</Form.Label>
														<Col
																sm={10}
																style={{
																		display: 'flex',
																		flexDirection: 'row',
																		alignItems: 'flexStart',
																		justifyContent: 'space-around',
																}}
														>
																<Form.Check
																		type="radio"
																		label="경영학과"
																		name="formHorizontalRadios"
																		id="formHorizontalRadios1"
																		value = "Business"
																		defaultChecked={radioGroup['Business']} onChange={handleRadio}
																/>
																<Form.Check
																		type="radio"
																		label="전자공학과"
																		name="formHorizontalRadios"
																		id="formHorizontalRadios2"
																		value="Electronics"
																		defaultChecked={radioGroup['Electronics']} onChange={handleRadio}
																/>
																<Form.Check
																		type="radio"
																		label="컴퓨터공학과"
																		name="formHorizontalRadios"
																		id="formHorizontalRadios3"
																		value="Computer"
																		defaultChecked={radioGroup['Computer']} onChange={handleRadio}
																/>
														</Col>
												</Form.Group>
												<Form.Group>
														<Button variant="primary" type="submit" className="signup-btn">
																완료
														</Button>
												</Form.Group>
										</fieldset>
								</Form>
				</StyledCard>
		</div>
);
	};

export default signup;