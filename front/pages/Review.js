import React from 'react';
import AppLayout from '../components/AppLayout';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col, Button} from 'react-bootstrap';

const Review = () => {
    return(
        <>
            <AppLayout>
                <br/><br/>
                <Container style={{marginLeft: "70px"}}>
                    <Button variant="outline-info" style={{  margin:"10px", marginLeft: "20px"}}>전공</Button>{' '}
                    <Button variant="outline-info" style={{ margin: "10px"}}>MSC</Button>{' '}
                    <Button variant="outline-info" style={{ margin: "10px"}}>교양</Button>{' '}
                    <Row style={{margin:"auto"}}>
                    <Card border="info" style={{ width: '18rem', margin: "20px"}}>
                    <Card.Header>MSC</Card.Header>
                    <Card.Body>
                    <Card.Title>이산수학</Card.Title>
                    <Card.Subtitle>오길호교수님 월34 목3</Card.Subtitle>
                    <Card.Text>
                        ★★★★★<br/>
                        평가내용~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' , margin: "20px"}}>
                    <Card.Header>MSC</Card.Header>
                    <Card.Body>
                    <Card.Title>이산수학</Card.Title>
                    <Card.Subtitle>오길호교수님 월34 목3</Card.Subtitle>
                    <Card.Text>
                        ★★★★★<br/>
                        평가내용~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card border="info" style={{ width: '18rem' , margin: "20px"}}>
                    <Card.Header>MSC</Card.Header>
                    <Card.Body>
                    <Card.Title>이산수학</Card.Title>
                    <Card.Subtitle>오길호교수님 월34 목3</Card.Subtitle>
                    <Card.Text>
                        ★★★★★<br/>
                        평가내용~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Row>

                    <Row style={{margin:"auto"}}>
                    <Card border="info" style={{ width: '18rem',  margin: "20px" }}>
                    <Card.Header>MSC</Card.Header>
                    <Card.Body>
                    <Card.Title>이산수학</Card.Title>
                    <Card.Subtitle>오길호교수님 월34 목3</Card.Subtitle>
                    <Card.Text>
                        ★★★★★<br/>
                        평가내용~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~~~~~~~~~~~
                        ~~~~~~~~~~~~~~
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Row>
                </Container>
            </AppLayout>
        </>
    );
}

export default Review;