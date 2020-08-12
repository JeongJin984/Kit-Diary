import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const StyledCard = styled(Card)`
    margin: auto;
`;

const signup = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <StyledCard className="stylecard" style={{ width: '30rem', marginTop: '20px' }}>
                <Link href="login">
                    <FontAwesomeIcon
                        icon={faChevronLeft}
                        size="2x"
                        style={{ marginLeft: '20px', marginTop: '20px', cursor: 'pointer' }}
                    />
                </Link>
                <StyledCard.Img variant="top" src="/cat.png" style={{ borderRadius: '25px' }} />
                <Form>
                    <Form.Group className="signup-form-name">
                        <Form.Label>이름</Form.Label>
                        <Form.Label>성</Form.Label>
                    </Form.Group>
                    <Form.Group className="signup-form-name">
                        <Form.Control placeholder="First name" className="signup-name" />
                        <Form.Control placeholder="Last name" className="signup-name" />
                    </Form.Group>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                className="signup-email"
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className="signup-password"
                            />
                        </Form.Group>
                    </Form.Row>
                    <br />
                    <Form>
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
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="전자공학과"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="컴퓨터공학과"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
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
                </Form>
            </StyledCard>
        </div>
    );
};

export default signup;
