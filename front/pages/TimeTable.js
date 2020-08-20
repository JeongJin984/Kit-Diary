import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Table, Row, Col, Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TimeTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <AppLayout>
            <br/><br/>
            <Row style={{ marginLeft: "60%"}}>
                <Col>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:"120px", height: "40px"}}/>
                        <Button variant="outline-primary" style={{width:"60px", height: "40px"}}>검색</Button>
                    </Form>
                </Col>
                <Col style={{width: "300px"}}>
                    <div style={{width: "200px"}}>
                        <Button variant="outline-info" >추가</Button>{' '}
                        <Button variant="outline-info">수정</Button>{' '}<br/><br/>
                    </div>
                </Col>
            </Row><br/>
            <Table responsive="sm" border="5" align = "center" bgcolor="F4FFFF" bordercolor="E8F5FF" style={{width: "1000px", textAlign: "center"}}>
                <thead>
                    <tr>
                        <th>시간</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>09:00</td></tr>
                    <tr>
                        <td>2교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>10:00</td></tr>
                    <tr>
                        <td>3교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>11:00</td></tr>
                    <tr>
                        <td>4교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>12:00</td></tr>
                    <tr>
                        <td>5교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>13:00</td></tr>
                    <tr>
                        <td>6교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>14:00</td></tr>
                    <tr>
                        <td>7교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>15:00</td></tr>
                    <tr>
                        <td>8교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>16:00</td></tr>
                    <tr>
                        <td>9교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>17:00</td></tr>
                    <tr>
                        <td>10교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>18:00</td></tr>
                    <tr>
                        <td>11교시</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                        <td rowspan="2">Table cell</td>
                    </tr>
                    <tr><td>19:00</td></tr>
                </tbody>
            </Table>
        </AppLayout>
    );
};

export default TimeTable;
