import React, {useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, Form, Button, FormControl, Container, Row, Col, Card } from 'react-bootstrap'

//import { setTest } from '../reducers/test'
import { logOutAction } from '../reducers/user'

const StyledButton = styled(Button)`
    margin-left: 30px;
`

const AppLayout = ({ children }) => {
	const dispatch = useDispatch();
	const [current, setCurrent] = useState('');
	const onLogin = useSelector(state=>state.user.isLoggedIn);
	console.log('AppLayout Login : ' + onLogin);

	const Logout = () => {
		dispatch(logOutAction ());
		consolo.log(onLogin)
	}
	
	return(
		<div>
			<Link href="/"><img src="/banner.jpg" width="100%"/></Link>
			<Navbar bg="light" variant="light">
							<Navbar.Brand href="/">홈</Navbar.Brand>
							<Nav className="mr-auto">
								<Nav.Link href="/FreeBoard">자유게시판</Nav.Link>
								<Nav.Link href="/Review">강의후기</Nav.Link>
								<Nav.Link href="/TimeTable">시간표</Nav.Link>
							</Nav>
							{!onLogin && <Link href="./login"><a><StyledButton variant="outline-primary">로그인</StyledButton></a></Link>}
						</Navbar>
			<Container fluid>
				<Row>
					<Col xs={10}>
						<div>
							{children}
						</div>
					</Col>
					<Col xs={2} style={{padding:"0px",  right: "0px"}}>
						<Row>
							{onLogin ? <Card style={{ width: '18rem', marginTop: "10px", position: "fixed" }}>
								<Card.Img variant="top" src="/cat.png" />
								<Card.Body>
									<Card.Title>사용자이름</Card.Title>
									<Card.Text>
										자기소개
									</Card.Text>
									{onLogin && <StyledButton variant="outline-primary" onClick = {Logout}>로그아웃</StyledButton>}
								</Card.Body>
							</Card> :
							<Card style={{ width: '18rem', marginTop: "10px", position: "fixed" }}>
								<Card.Img variant="top" src="/cat.png" />
								<Card.Body>
									<Card.Title>로그인을 해주세요</Card.Title>
								</Card.Body>
							</Card>
							}
						</Row>
					</Col>
					<Col>
					</Col>
				</Row>
			</Container>
			
		</div>
	)
}

export default AppLayout