import React from 'react';
import AppLayout from '../components/AppLayout';
import {Table} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const TimeTable = () => {
    return(
        <AppLayout>
            <br/><br/>
            <div>
            <Button variant="outline-info" style={{ marginLeft: "950px" }}>추가</Button>{' '}
            <Button variant="outline-info">수정</Button>{' '}<br/><br/>
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
}

export default TimeTable;