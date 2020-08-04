import React from 'react'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import {Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import './App.css';
import Link from 'next/link'

const StyledButton = styled(Button)`
    width: 40px;
`

const App = ({Component}) => {
    return (
        <div>
            <Head>
                <title>my test</title>
                <meta charSet="UTF-8"></meta>
            </Head>

            <Container fluid>
            <Row>
                <Col sm={2}>
                    <Link href="./"><div
                        style={{
                            backgroundImage: `url("https://postfiles.pstatic.net/MjAyMDA4MDRfMjc5/MDAxNTk2NTI0NTQ3Mzcx.BVeb30Cr23hmLocFiwU5ozwDUQOyr3bG0B3SKVhfWEkg.aj7Vr8-IQPV0__xE7M8-ZUizht2ymqs8y4n4VEmVFUgg.PNG.ttkk1109/SE-758dbeb0-5b1b-4107-a5a3-e91ede7b23b8.png?type=w773")`,backgroundRepeat: 'no-repeat',padding:'0 0',width:'100px',height:'100px',color:'white'
                        }}>
                    </div></Link>
                </Col>
                <Col sm={7}>
                        <div class="Row">
                            <Row sm={4}></Row>
                            <Row sm={4} >
                                <Link href="/profile"><a>SNS</a></Link>
                                <Link href="/profile"><a>TimeTable</a></Link>
                            </Row>
                        </div>
                </Col>
                <Col sm={1} class="Login">
                    <Col><Link href="/login"><div><Button variant="outline-success">Login</Button>{''}</div></Link></Col>
                    <Col><Link href="/signup"><div><Button variant="outline-success">Sign-Up</Button>{' '}</div></Link></Col>
                </Col>
            </Row>
            </Container>
            <Component/>
        </div>
    )
}

export default App