import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const signup = () => {
    return(
        <div>
            <br/><br/>
            <Form>
                이름
                <Row>
                    <Col>
                    <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Control placeholder="Last name" />
                    </Col>
                </Row>
            </Form>
            <br/>
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>
            <br/>
            <Form>
            <fieldset>
                <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                    학과
                </Form.Label>
                <Col sm={10}>
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
            </fieldset>
            </Form>

            <Button variant="primary" type="submit">
                완료
            </Button>
            </Form>
        </div>
    );
}

export default signup;