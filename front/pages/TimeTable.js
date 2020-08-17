import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TimeTable = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <AppLayout>
            <br />
            <br />
            <div>
                <Button variant="outline-info" onClick={handleShow} style={{ marginLeft: '950px' }}>
                    추가
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>시간표 추가</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>This is modal body</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            닫기
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            저장 후 닫기
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Button variant="outline-info">수정</Button> <br />
                <br />
            </div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th></th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                </tbody>
            </Table>
        </AppLayout>
    );
};

export default TimeTable;
