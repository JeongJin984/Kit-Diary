import React from 'react';
import AppLayout from '../components/AppLayout';
import Table from 'react-bootstrap/Table';

const FreeBoard = () => {
    return(
        <AppLayout>
            <br/><br/>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th width="20px">번호</th>
                    <th width="210px">제목</th>
                    <th width="50px">작성자</th>
                    <th width="50px">날짜</th>
                    <th width="20px">조회</th>
                    <th width="20px">추천</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Table>
        </AppLayout>
    );
}

export default FreeBoard;