import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Navbar, Nav, Form, Button, FormControl, Container, Row, Col, Card } from 'react-bootstrap'

const StyledButton = styled(Button)`
    margin-left: 30px;
`

const AppLayout = ({ children }) => {
	return(
		<div>
			<Link href="/"><img src="/banner.jpg" width="100%"/></Link>
			<Container fluid>
				<Row>
					<Col xs={9}>
						<Navbar bg="light" variant="light">
							<Navbar.Brand href="#home">Navbar</Navbar.Brand>
							<Nav className="mr-auto">
								<Nav.Link href="#home">Home</Nav.Link>
								<Nav.Link href="#features">Features</Nav.Link>
								<Nav.Link href="#pricing">Pricing</Nav.Link>
							</Nav>
							<Form inline>
								<FormControl type="text" placeholder="Search" className="mr-sm-2" />
								<Button variant="outline-primary">Search</Button>
							</Form>
							<Link href="./login"><a><StyledButton variant="outline-primary">로그인</StyledButton></a></Link>
						</Navbar>
						<div>
							{children}
						</div>
					</Col>
					<Col xs={3}>
						<Row>
							<Card style={{ width: '18rem', marginTop: "10px" }}>
								<Card.Img variant="top" src="/cat.png" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk of
										the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
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