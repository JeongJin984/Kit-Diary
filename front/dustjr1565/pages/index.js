import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import {Card, Button} from 'react-bootstrap'

const Home = () => {
    return(
        <div>
            <div class="SchoolImg"> </div>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        SNS
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>SNS Content</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        TimeTable
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>TimeTable Content</Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>

                <h2 class="introduce">ooooo oooo</h2>
            <p class="introduce">~~~~~ ~~ ~~~~~ ~~~ ~~~~ ~ ~~ ~ ~~~.</p>
        </div>
    )
}

export default Home;